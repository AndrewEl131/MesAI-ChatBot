import Image from "next/image";
import SplineScene from "./SplineScene";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-[70vw] h-full flex flex-col items-center">
        <div className="text-center h-100 flex flex-col mt-[100px]">
          {/* Glow effect using drop-shadow */}
          <h1 className="font-sans text-8xl font-bold text-white drop-shadow-[0_15px_15px_rgba(255,255,255,0.3)]">
            Welcome to MesAi
          </h1>

          {/* Distinctive subtitle: Serif, Italic, and subtle color */}
          <h2 className="mt-4 font-serif text-5xl italic tracking-wide text-zinc-400">
            Start your conversation here
          </h2>
        </div>

        <div>
          <button className="btn cursor-pointer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon button
          </button>
        </div>
      </div>
      <SplineScene />
    </main>
  );
}
