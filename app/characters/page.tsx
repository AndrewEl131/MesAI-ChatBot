// app/characters/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const characters = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    description: "Energetic ninja who believes in never giving up",
    image: "/assets/character-naruto.jpg",
    color: "bg-orange-500",
  },
  {
    id: "socrates",
    name: "Socrates",
    description: "Ancient Greek philosopher who questions everything",
    image: "/assets/character-socrates.jpg",
    color: "bg-blue-700",
  },
  {
    id: "tramp",
    name: "Donald trump",
    description: "The President of United States of America, and nice guy",
    image: "/assets/character-tramp.jpg",
    color: "bg-gray-700",
  },
];

export default function CharactersPage() {
  const router = useRouter();

  const handleSelectCharacter = (characterId: string) => {
    localStorage.setItem("character", characterId);
    router.push("/chat");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Choose Your Character
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Select who you want to have a conversation with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div
              key={character.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80 w-full">
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${character.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {character.name}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {character.description}
                  </p>
                  
                  <button
                    className={`w-full py-3 px-4 ${character.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity cursor-pointer`}
                    onClick={() => handleSelectCharacter(character.id)}
                  >
                    Chat with {character.name.split(' ')[0]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}