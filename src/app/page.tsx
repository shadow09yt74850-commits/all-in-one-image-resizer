"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "10deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen scroll-smooth overflow-x-hidden">
      {/* 3D Header Section */}
      <motion.header
        style={{
          y,
          rotateX: rotate,
          opacity,
          transformPerspective: 1000,
        }}
        className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-cyan-400 mb-6 tracking-tight"
        >
          ⚡ All-in-One Image Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Resize, compress, crop, convert, and optimize your images — all in one place, 100% free and private.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="/photo-resizer"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-400/60"
          >
            Try Now 🚀
          </a>
        </motion.div>
      </motion.header>

      {/* Projects Section (3D scroll reveal) */}
      <motion.section
        initial={{ opacity: 0, y: 80, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto py-24"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Card
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.section>

      {/* Articles Section */}
      <motion.section
        initial={{ opacity: 0, y: 100, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 px-4 max-w-4xl mx-auto space-y-10"
      >
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, rotateY: 3 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-cyan-400/50 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-3">{article.title}</h3>
            <p className="text-gray-300 leading-relaxed">{article.content}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* 3D Scroll Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-28 text-gray-500 text-sm text-center py-16"
      >
        &copy; 2025 All-in-One Image Hub. Built with ❤️ using Next.js & Framer Motion.
      </motion.footer>
    </div>
  );
}
