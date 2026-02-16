"use client";

import React, { useRef } from "react";

export default function Chat() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  };

  return (
    <div className="w-2xl h-[92vh] mx-auto relative border flex flex-col">
      {/* Chat messages */}
      <div className="flex-1 border" />

      {/* Input */}
      <div className="w-full min-h-20 flex items-center gap-5 px-20 py-4 border">
        {/* Avatar */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4" />
          <path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10" />
        </svg>

        {/* Input area */}
        <div className="flex gap-2.5 items-end w-full">
          <textarea
            ref={textareaRef}
            rows={1}
            onInput={handleInput}
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

          <button className="h-11 text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-base text-sm px-5 cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
