import React from "react";

interface CardProps {
  name: string;
  description: string;
  link: string;
}

export default function Card({ name, description, link }: CardProps) {
  return (
    <a
      href={link}
      className="bg-gray-800 rounded-xl p-6 shadow-lg text-center transition-transform duration-500 hover:scale-105 hover:bg-cyan-400 hover:text-black"
    >
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p>{description}</p>
    </a>
  );
}
