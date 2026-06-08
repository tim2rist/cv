"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { siteConfig } from "@/lib/data";
import { springSnappy } from "@/lib/motion";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What is Tymofii's experience with AWS?",
  "Is Tymofii experienced with Agile workflows?",
  "Tell me about the AI Delivery Assistant project.",
] as const;

const OFFLINE_MESSAGE =
  "The AI Assistant is currently offline. Please reach out via email.";

export function AIChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content: `Hi! I'm Tymofii's AI assistant. Ask me anything about his experience, projects, skills, or education.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputId = useId();
  const panelTitleId = useId();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [open, messages, loading, scrollToBottom]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setError(null);
    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = (await res.json()) as { reply?: string; error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? OFFLINE_MESSAGE);
      }

      setMessages((prev) => [
        ...prev,
        { role: "model", content: data.reply ?? "No response received." },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : OFFLINE_MESSAGE;
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: `${OFFLINE_MESSAGE} (${siteConfig.email})`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.section
            role="dialog"
            aria-labelledby={panelTitleId}
            aria-modal="true"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={springSnappy}
            className="flex h-[min(520px,calc(100vh-6rem))] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          >
            <header className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-400">
                  <Bot size={18} aria-hidden="true" />
                </span>
                <div>
                  <h2
                    id={panelTitleId}
                    className="text-sm font-semibold text-slate-100"
                  >
                    Ask about Tymofii
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Powered by Gemini AI
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat assistant"
                className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-cyan-600 to-emerald-600 text-white"
                        : "border border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          delay: dot * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <p className="text-center text-xs text-red-400" role="alert">
                  {error}
                </p>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length <= 1 && !loading && (
              <div className="border-t border-white/5 px-4 py-3">
                <p className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  <Sparkles size={12} aria-hidden="true" />
                  Suggested questions
                </p>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => sendMessage(q)}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 bg-slate-900/60 p-3"
            >
              <div className="flex items-end gap-2">
                <label htmlFor={inputId} className="sr-only">
                  Ask a question about Tymofii
                </label>
                <textarea
                  id={inputId}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  placeholder="Ask about experience, skills, projects…"
                  disabled={loading}
                  className="max-h-24 min-h-[40px] flex-1 resize-none rounded-xl border border-white/10 bg-slate-950/80 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-500/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={springSnappy}
        aria-expanded={open}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
      >
        {open ? (
          <X size={22} aria-hidden="true" />
        ) : (
          <MessageCircle size={22} aria-hidden="true" />
        )}
      </motion.button>
    </div>
  );
}
