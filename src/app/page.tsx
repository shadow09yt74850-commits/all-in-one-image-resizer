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
      "High-quality images are essential for modern websites, but large file sizes slow performance. By resizing images, you improve loading speed, SEO rankings, and user experience.",
  },
  {
    title: "All-in-One Image Hub",
    content:
      "Our All-in-One Image Resizer Hub allows you to resize, compress, crop, and convert images for any purpose — social media, blogs, or websites — in seconds.",
  },
  {
    title: "Editing Made Simple",
    content:
      "No software needed. With our tool, you can edit images right in your browser and download the result instantly. Fast, secure, and professional.",
  },
];

const faqs = [
  {
    question: "What is an image resizer?",
    answer:
      "An image resizer allows you to adjust the width and height of an image without losing quality. It’s perfect for web optimization, printing, or social media uploads.",
  },
  {
    question: "Is this tool free to use?",
    answer:
      "Yes! Our All-in-One Image Resizer Hub is 100% free to use with no sign-up required. We believe powerful tools should be accessible to everyone.",
  },
  {
    question: "Does this tool compress or resize images?",
    answer:
      "Both! You can resize dimensions or compress image size to reduce file weight while keeping great visual quality.",
  },
  {
    question: "Which image formats are supported?",
    answer:
      "We support popular formats like JPG, PNG, WEBP, and coming soon — SVG, GIF, and HEIC!",
  },
  {
    question: "Can I convert images to different formats?",
    answer:
      "Yes, our format converter lets you easily change JPG to PNG, PNG to WEBP, and more without quality loss.",
  },
  {
    question: "Are my images safe?",
    answer:
      "Absolutely. All image processing happens securely on your device — your files are never uploaded to external servers.",
  },
  {
    question: "Will there be mobile support?",
    answer:
      "Yes, the All-in-One Image Hub is fully responsive. It works on any phone, tablet, or desktop device seamlessly.",
  },
  {
    question: "Why choose this over other image tools?",
    answer:
      "We combine speed, privacy, and power. Unlike other tools, there are no ads, logins, or file limits — only clean, fast image editing.",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen scroll-smooth">
      {/* Header Section with Parallax Effect */}
      <motion.header
        style={{ y: y1 }}
        className="flex flex-col items-center py-20 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-cyan-400 mb-4 drop-shadow-lg"
        >
          ⚡ All-in-One Image Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-12 text-gray-300 text-lg text-center max-w-2xl"
        >
          Resize, compress, crop, and convert images easily — built for creators,
          developers, and everyday users who want speed and simplicity.
        </motion.p>
      </motion.header>

      {/* Projects Section */}
      <motion.section
        style={{ y: y2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto"
      >
        {projects.map((project, idx) => (
          <Card
            key={idx}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.section>

      {/* Articles Section */}
      <section className="mt-20 px-4 max-w-4xl mx-auto space-y-8">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-cyan-400/50 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{article.title}</h3>
            <p className="text-gray-300">{article.content}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQs Section */}
      <section className="mt-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-400/40 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm text-center py-10 border-t border-gray-700">
        &copy; 2025 All-in-One Image Hub. Built for creators by creators. Optimized for
        SEO, speed, and accessibility.
      </footer>
    </div>
  );
}
