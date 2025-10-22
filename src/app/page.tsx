import React from "react";
import Card from "./components/Card";

const projects = [
  { name: "Photo Resizer", description: "Resize images online instantly.", link: "/photo-resizer" },
  { name: "Compress Images", description: "Reduce image file size quickly.", link: "#" },
  { name: "Crop Images", description: "Crop images to desired dimensions.", link: "#" },
  { name: "Convert Format", description: "Change image formats easily.", link: "#" },
  { name: "Future Project", description: "Coming soon...", link: "#" },
];

const articles = [
  {
    title: "Why Image Resizing Matters",
    content:
      "Images take up bandwidth and storage. Resizing them optimizes websites, improves load speed, and saves space.",
  },
  {
    title: "All-in-One Image Hub",
    content:
      "Our hub allows users to quickly resize, compress, crop, and convert images for any purpose — social media, presentations, blogs, and more.",
  },
  {
    title: "Editing Made Simple",
    content:
      "Everyone works with images. Our tools simplify image editing so anyone can get professional results instantly.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen scroll-smooth">
      {/* Header */}
      <header className="flex flex-col items-center py-20 px-4">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4 animate-pulse">
          ⚡ All-in-One Image Hub
        </h1>
        <p className="mb-12 text-gray-300 text-lg text-center max-w-2xl">
          Explore all my projects in one hub. Resize, compress, crop, convert, and manage images efficiently.
        </p>
      </header>

      {/* Projects Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <Card
            key={idx}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>

      {/* Articles Section */}
      <section className="mt-20 px-4 max-w-4xl mx-auto space-y-8">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-500 hover:shadow-cyan-400/50"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{article.title}</h3>
            <p className="text-gray-300">{article.content}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center py-10">
        &copy; 2025 All-in-One Image Hub. All rights reserved.
      </footer>
    </div>
  );
}
