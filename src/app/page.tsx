"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "./components/Card";

const projects = [
  { name: "Photo Resizer", description: "Resize images online instantly.", link: "/photo-resizer" },
  { name: "Compress Images", description: "Reduce image file size quickly.", link: "#" },
  { name: "Crop Images", description: "Crop images to desired dimensions.", link: "#" },
  { name: "Convert Format", description: "Change image formats easily.", link: "#" },
  { name: "Future Project", description: "Coming soon...", link: "#" },
];

const faqs = [
  { q: "What is the All-in-One Image Hub?", a: "A fast, free, and private tool to resize, compress, crop, and convert images. No ads, no registration, fully browser-based." },
  { q: "Is it really free?", a: "Yes, 100% free. No hidden costs. Just upload, edit, and download instantly." },
  { q: "Will my images be private?", a: "All processing happens locally in your browser. Your files never leave your device." },
  { q: "Which formats are supported?", a: "JPG, PNG, WEBP, and more. You can also convert between formats instantly." },
  { q: "Can I use it on mobile?", a: "Yes! Fully responsive and optimized for mobile and tablets." },
  { q: "Why resize images?", a: "Improves site performance, reduces load times, and keeps social media posts optimized." },
  { q: "Does it work offline?", a: "Yes, after the first load, basic tools work offline using caching." },
  { q: "Who can use this tool?", a: "Anyone — students, designers, YouTubers, developers, or businesses." },
  { q: "Can I compress without losing quality?", a: "Yes! Smart compression reduces size while maintaining original quality." },
  { q: "Is this tool SEO-friendly?", a: "Optimized images improve SEO, page speed, and Google rankings." },
  { q: "Can I crop images precisely?", a: "Yes, select exact dimensions or aspect ratios for precise cropping." },
  { q: "Does it support batch processing?", a: "Future updates will include batch resizing and compressing for multiple files at once." },
];

const articles = [
  {
    title: "Why Image Resizing Matters",
    content: "Large images can slow down websites and impact SEO. Our tool helps optimize images quickly for web, blogs, and social media."
  },
  {
    title: "All-in-One Image Hub",
    content: "Resize, crop, compress, and convert images in a single hub. Works entirely in your browser without uploading data anywhere."
  },
  {
    title: "Editing Made Simple",
    content: "User-friendly tools allow anyone to achieve professional results instantly. No installation needed."
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "10deg"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white scroll-smooth">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.12), transparent 60%)",
              "radial-gradient(circle at 80% 70%, rgba(255,0,255,0.12), transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(0,255,150,0.12), transparent 60%)",
            ]
          }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 12 }}
          className="absolute inset-0"
        />
      </div>

      {/* Header */}
      <motion.header
        style={{ y, rotateX: rotate, opacity, transformPerspective: 1000 }}
        className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-cyan-400 mb-6 tracking-tight drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]"
        >
          ⚡ All-in-One Image Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          Resize, compress, crop, convert, and optimize your images — all in one place, free and private.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="/photo-resizer"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-full text-black font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-400/60 animate-pulse"
          >
            Try Now 🚀
          </a>
        </motion.div>
      </motion.header>

      {/* Projects Section with cursor 3D tilt */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto py-24">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="cursor-pointer"
            whileHover={{ scale: 1.07, rotateY: 6, boxShadow: "0px 0px 25px rgba(0,255,255,0.4)" }}
            whileTap={{ scale: 0.97, boxShadow: "0px 0px 40px rgba(0,255,255,0.8)" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Card
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </section>

      {/* Articles Section */}
      <section className="mt-10 px-4 max-w-4xl mx-auto space-y-10">
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
      </section>

      {/* FAQ Section */}
      <section className="mt-28 px-4 max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
          >
            <button
              onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-xl font-semibold text-cyan-400">{faq.q}</h3>
              <span className="text-gray-400 text-2xl">{activeFAQ === idx ? "−" : "+"}</span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={activeFAQ === idx ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-2"
            >
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-28 text-gray-500 text-sm text-center py-16"
      >
        &copy; 2025 All-in-One Image Hub — Thanks For Visiting ❤️
      </motion.footer>
    </div>
  );
}
