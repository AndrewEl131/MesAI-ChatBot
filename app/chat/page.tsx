import React from "react";
import Image from "next/image";
import Chat from "./Chat";

export default function chatPage() {
  return (
    <main className="w-full h-screen">
      {/* head */}
      <div className="w-full h-13 flex justify-between items-center">
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
      <Chat />
    </main>
  );
}
