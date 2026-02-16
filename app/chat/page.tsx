import React from "react";
import Image from "next/image";

export default function chatPage() {
  return (
    <main className="w-full h-screen">
      {/* head */}
      <div className="w-full h-14 flex justify-between items-center">
        <div className="w-15.5 h-15.5 relative">
          <Image fill src={"/assets/MesAI.png"} alt="logo" />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#ffffff"
          viewBox="0 0 24 24"
        >
          <path d="M12 10a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0-12a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>
        </svg>
      </div>

      {/* Chat wrapper */}
      <div className="w-2xl h-[92vh] mx-auto relative border">
        {/* Chat container */}
        <div className="w-full h-[90%] border"></div>

        {/* Input */}

        <div className="w-full h-15 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#ffffff"
            viewBox="0 0 24 24"
          >
            <path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4m0 6c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2"></path>
            <path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10M8.18 19.02C8.59 17.85 9.69 17 11 17h2c1.31 0 2.42.85 2.82 2.02-1.14.62-2.44.98-3.82.98s-2.69-.35-3.82-.98m9.3-1.21c-.81-1.66-2.51-2.82-4.48-2.82h-2c-1.97 0-3.66 1.16-4.48 2.82A7.96 7.96 0 0 1 4 11.99c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.97 4.36-2.52 5.82"></path>
          </svg>

          <input type="text" className="w-70 px-2 py-1.5 text-amber-50 border rounded-md" placeholder="Type prompt here..." />
        </div>
      </div>
    </main>
  );
}
