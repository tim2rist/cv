import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildGeminiSystemPrompt } from "@/lib/cv-context";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

interface ChatRequestBody {
  messages: ChatMessage[];
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY is not configured on the server." },
      { status: 500 },
    );
  }

  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { messages } = body;

  if (!messages?.length) {
    return NextResponse.json(
      { error: "At least one message is required." },
      { status: 400 },
    );
  }

  const lastMessage = messages[messages.length - 1];

  if (lastMessage.role !== "user" || !lastMessage.content.trim()) {
    return NextResponse.json(
      { error: "Last message must be a non-empty user message." },
      { status: 400 },
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction: buildGeminiSystemPrompt(),
    });

    const history = messages.slice(0, -1).map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini API error:", error);
    return NextResponse.json(
      {
        error:
          "The AI Assistant is currently offline. Please reach out via email.",
      },
      { status: 503 },
    );
  }
}
