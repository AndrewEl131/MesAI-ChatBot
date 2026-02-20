// app/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Character display names and images
const characterInfo = {
  naruto: { name: "Naruto Uzumaki", emoji: "🍜", color: "bg-orange-500" },
  socrates: { name: "Socrates", emoji: "🏛️", color: "bg-blue-700" },
  tramp: { name: "The Tramp", emoji: "🎩", color: "bg-gray-700" },
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const router = useRouter();

  // Check for selected character on mount
  useEffect(() => {
    const savedCharacter = localStorage.getItem("character");
    if (!savedCharacter) {
      router.push("/characters");
    } else {
      setCharacter(savedCharacter);
    }
  }, [router]);

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !character) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          model: "llama3.2",
          character: character, // Send the selected character
        }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantResponse += chunk;

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

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  const handleChangeCharacter = () => {
    localStorage.removeItem("character");
    router.push("/characters");
  };

  if (!character) return null;

  const currentCharacter = characterInfo[character as keyof typeof characterInfo] || {
    name: character,
    emoji: "🤖",
    color: "bg-gray-500"
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      {/* Character Header */}
      <div className={`${currentCharacter.color} text-white rounded-lg p-4 mb-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{currentCharacter.emoji}</span>
          <div>
            <h2 className="text-xl font-bold">{currentCharacter.name}</h2>
            <p className="text-sm opacity-90">Talking to {currentCharacter.name}</p>
          </div>
        </div>
        <button
          onClick={handleChangeCharacter}
          className="px-3 py-1 bg-white text-gray-800 rounded-lg text-sm hover:bg-gray-100 transition-colors"
        >
          Change Character
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 scrollbar-thumb-rounded-full hover:scrollbar-thumb-blue-700 pr-4">
        {/* Welcome message from character */}
        {messages.length === 0 && (
          <div className="bg-gray-100 text-gray-700 p-4 rounded-lg text-center italic">
            You are now chatting with {currentCharacter.name}. Start the conversation!
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : `${currentCharacter.color} text-white self-start mr-auto`
            } max-w-[70%]`}
          >
            {message.role === "assistant" && (
              <span className="text-xs opacity-75 block mb-1">
                {currentCharacter.name}
              </span>
            )}
            {message.content}
          </div>
        ))}
        
        {isLoading && messages[messages.length - 1]?.content === "" && (
          <div className={`${currentCharacter.color} text-white p-3 rounded-lg self-start mr-auto`}>
            <span className="text-xs opacity-75 block mb-1">{currentCharacter.name}</span>
            <span className="animate-pulse">▋</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          onInput={handleInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${currentCharacter.name} something...`}
          className="w-full max-h-40 resize-none overflow-y-auto bg-white border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-y-hidden"
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="h-11 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}