"use client";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
  if (!input) return;

  setMessages((m) => [...m, "You: " + input]);

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();

  setMessages((m) => [...m, "AI: " + (data.reply || "No reply")]);
  setInput("");
};


  return (
    <div>
      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
