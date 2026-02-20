// app/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    // Update messages with the user's message
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Add a placeholder for the assistant's response
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      // app/page.tsx - Update the fetch call
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          model: "llama3.2", // Specify which model to use
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = "";

      // Read the stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantResponse += chunk;

        // Update the last message (assistant's) with the new chunk
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: "assistant",
            content: assistantResponse,
          };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <div
        className="flex-1 overflow-y-auto mb-4 space-y-4  scrollbar-thin  scrollbar-thumb-blue-500  scrollbar-track-gray-100  scrollbar-thumb-rounded-full hover:scrollbar-thumb-blue-700 pr-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start mr-auto"
            } max-w-[70%]`}
          >
            {message.content}
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.content === "" && (
          <div className="bg-gray-200 text-black p-3 rounded-lg self-start mr-auto">
            <span className="animate-pulse">▋</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        {/* Input area */}
        <textarea
          ref={textareaRef}
          rows={1}
          onInput={handleInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your prompt here..."
          className="
              w-full
              max-h-40
              resize-none
              overflow-y-auto
              scrollbar-hidden
              bg-neutral-secondary-medium
              border border-default-medium
              text-heading text-sm
              rounded-base
              px-3 py-2.5
              leading-6
              shadow-xs
              placeholder:text-body
              focus:ring-brand focus:border-brand
            "
        />
        <button
          type="submit"
          disabled={isLoading}
          className="h-11 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
