import React from "react";
import Card from "./components/Card";
import Head from "next/head";

const projects = [
  { name: "Photo Resizer", description: "Resize images online instantly for free.", link: "/photo-resizer" },
  { name: "Compress Images", description: "Reduce image file size quickly without losing quality.", link: "#" },
  { name: "Crop Images", description: "Crop images to perfect dimensions for social media or blogs.", link: "#" },
  { name: "Convert Format", description: "Easily convert images between JPG, PNG, and WebP.", link: "#" },
  { name: "Future Project", description: "More tools coming soon...", link: "#" },
];

const articles = [
  {
    title: "Why Image Resizing Matters",
    content:
      "Large images slow down websites and apps. Our image resizer optimizes pictures to load faster and save bandwidth — essential for SEO and user experience.",
  },
  {
    title: "All-in-One Image Hub Tools",
    content:
      "Resize, compress, crop, and convert your images online in seconds. Our free image editor helps creators, developers, and marketers optimize visuals with ease.",
  },
  {
    title: "Editing Made Simple and Fast",
    content:
      "You don’t need Photoshop to get perfect images. With All-in-One Image Hub, anyone can resize and optimize images instantly from their browser.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen scroll-smooth">
      <Head>
        <title>All-in-One Image Hub | Free Online Image Resizer & Compressor</title>
        <meta
          name="description"
          content="Resize, compress, crop, and convert images online for free. Fast, secure, and high-quality — perfect for social media, blogs, and developers."
        />
        <meta
          name="keywords"
          content="image resizer, image compressor, online image tools, photo resizer, image converter, free photo editor, resize jpg png webp"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="All-in-One Image Hub - Free Online Image Tools" />
        <meta
          property="og:description"
          content="All-in-One Image Hub lets you resize, compress, and convert images instantly. 100% free online image editor."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://all-in-one-image-resizer-hub.vercel.app/" />
        <meta property="og:image" content="/window.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is the image resizer free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, All-in-One Image Hub is 100% free for all image resizing, compression, and conversion tools."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does image resizing reduce quality?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Our smart algorithms maintain quality while reducing file size for faster performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I resize multiple images at once?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Currently, resizing is single-file based, but batch processing will be added soon."
                  }
                }
              ]
            }),
          }}
        />
      </Head>

      {/* Header */}
      <header className="flex flex-col items-center py-20 px-4">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4 animate-pulse">
          ⚡ All-in-One Image Hub
        </h1>
        <p className="mb-12 text-gray-300 text-lg text-center max-w-2xl">
          Resize, compress, crop, and convert images online instantly. Fast, free, and perfect for content creators and developers.
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
