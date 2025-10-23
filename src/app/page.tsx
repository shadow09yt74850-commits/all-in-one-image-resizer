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
      "Images take up bandwidth and storage. Resizing them optimizes websites, improves load speed, and saves space. Large images can slow down a website and affect SEO performance. Using our free online photo resizer, you can make your images web-friendly in seconds.",
  },
  {
    title: "All-in-One Image Hub",
    content:
      "Our platform allows users to quickly resize, compress, crop, and convert images for any purpose — social media, presentations, blogs, or eCommerce. It's lightweight, privacy-friendly, and works directly in your browser without uploading your data anywhere.",
  },
  {
    title: "Editing Made Simple",
    content:
      "Our tools are designed for simplicity and speed. Whether you’re resizing a photo for Instagram or compressing an image for your portfolio, our website provides professional results instantly with no software installation required.",
  },
];

const faqs = [
  {
    question: "What is an online image resizer?",
    answer:
      "An online image resizer is a free tool that lets you change the dimensions of your images without downloading any software. With All-in-One Image Hub, you can resize photos instantly for social media, websites, or printing. It supports popular formats like JPG, PNG, and WebP.",
  },
  {
    question: "Is All-in-One Image Hub free to use?",
    answer:
      "Yes! Our image resizing, compression, and conversion tools are 100% free to use. There are no hidden charges or watermarks. You can upload unlimited images and process them directly in your browser for complete privacy.",
  },
  {
    question: "Will my images be stored on your servers?",
    answer:
      "No, all processing happens locally on your device. Your images never leave your computer. This ensures privacy and security while keeping the performance lightning-fast.",
  },
  {
    question: "Which formats can I resize or convert?",
    answer:
      "You can resize, compress, and convert popular formats such as JPG, PNG, JPEG, and WebP. In future updates, we’ll also add support for HEIC, TIFF, and BMP formats.",
  },
  {
    question: "How do I resize an image online?",
    answer:
      "Simply upload your photo using our Photo Resizer tool, enter your preferred width and height, and click 'Resize'. The new image will be instantly available for download. It works perfectly for thumbnails, profile pictures, and banners.",
  },
  {
    question: "Can I compress large images without losing quality?",
    answer:
      "Absolutely. Our Image Compressor intelligently reduces file size while preserving visual quality. It's ideal for web developers, photographers, and designers who need smaller files without blurring or pixelation.",
  },
  {
    question: "Does this work on mobile devices?",
    answer:
      "Yes! Our website is fully responsive and optimized for both mobile and desktop devices. You can resize or compress photos directly from your smartphone or tablet anytime, anywhere.",
  },
  {
    question: "Why should I use All-in-One Image Hub instead of other tools?",
    answer:
      "Unlike other tools that require sign-ups or downloads, All-in-One Image Hub is free, secure, and ad-free. It combines all your image tools — resize, crop, compress, and convert — into one simple interface for fast, professional results.",
  },
  {
    question: "Does image resizing affect quality?",
    answer:
      "When resizing with our tool, you can maintain high image quality while reducing file size. It uses smart compression algorithms to keep your pictures sharp and detailed, even after resizing.",
  },
  {
    question: "Can I use this tool for business or commercial use?",
    answer:
      "Yes, our tools are free for both personal and commercial projects. You can use them for your websites, marketing materials, product images, or any other professional purpose without restrictions.",
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
          Explore all tools in one place. Resize, compress, crop, convert, and optimize your images — 100% free and private.
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

      {/* FAQs Section */}
      <section className="mt-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transition-all duration-500"
            >
              <h4 className="text-xl font-semibold text-cyan-300 mb-2">
                {faq.question}
              </h4>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center py-10">
        &copy; 2025 All-in-One Image Hub. All rights reserved.
      </footer>
    </div>
  );
}
