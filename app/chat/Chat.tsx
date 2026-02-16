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
    <div className="w-2xl h-[93vh] mx-auto relative flex flex-col">
      {/* Chat messages */}
      <div className="flex-1 pt-3.5 px-4 border">
        <div className="w-full flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4" />
            <path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10" />
          </svg>

          <div className="max-w-80 h-auto px-3 py-1.5 bg-[#3b32329f] rounded-b-md">
            <h1>
              hello wats upp?, how is your day hibawdid auiwduiad iuudaw iiudawu
            </h1>

            <div className="w-full h-10 flex items-center justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M20 8h-5.61l1.12-3.37c.2-.61.1-1.28-.27-1.8-.38-.52-.98-.83-1.62-.83h-1.61c-.3 0-.58.13-.77.36L6.54 8H4.01c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13.31a2 2 0 0 0 1.87-1.3l2.76-7.35c.04-.11.06-.23.06-.35v-2c0-1.1-.9-2-2-2ZM6 19H4v-9h2zm14-7.18L17.31 19H8V9.36L12.47 4h1.15l-1.56 4.68a1.01 1.01 0 0 0 .95 1.32h7v1.82Z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M20 3H6.69a2 2 0 0 0-1.87 1.3l-2.76 7.35c-.04.11-.06.23-.06.35v2c0 1.1.9 2 2 2h5.61l-1.12 3.37c-.2.61-.1 1.28.27 1.8.38.52.98.83 1.62.83h1.61c.3 0 .58-.13.77-.36l4.7-5.64h2.53c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-4 11.64L11.53 20h-1.15l1.56-4.68a1.01 1.01 0 0 0-.95-1.32h-7v-1.82L6.68 5h9.31v9.64Zm4-.64h-2V5h2z"></path>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path>
                <path d="M14 20H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="w-full min-h-20 flex items-center gap-5 px-20 py-4">
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
              px-3 py-2
              leading-6
              shadow-xs
              placeholder:text-body
              focus:ring-brand focus:border-brand
            "
          />

          <button className="h-10.5 text-white bg-linear-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-base text-sm px-5 cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
