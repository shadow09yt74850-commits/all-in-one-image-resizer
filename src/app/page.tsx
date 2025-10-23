"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "./components/Card";

const projects = [
  { name: "Photo Resizer", description: "Resize images online instantly.", link: "/photo-resizer" },
  { name: "Compress Images", description: "Reduce image file size quickly.", link: "#" },
  { name: "Crop Images", description: "Crop images to desired dimensions.", link: "#" },
  { name: "Convert Format", description: "Change image formats easily.", link: "#" },
  { name: "Future Project", description: "Coming soon...", link: "#" },
];

const faqs = [
  {
    q: "What is the All-in-One Image Hub?",
    a: "The All-in-One Image Hub is an online image editor that lets you resize, crop, compress, and convert images easily in one place. It’s fast, free, and secure.",
  },
  {
    q: "Is the image resizer free to use?",
    a: "Yes! Our photo resizer is completely free to use, with no sign-up or hidden charges. You can resize unlimited images instantly.",
  },
  {
    q: "How does image compression work?",
    a: "Our image compressor uses smart algorithms to reduce file size without losing visible quality. Perfect for web optimization and faster loading times.",
  },
  {
    q: "Can I resize images for Instagram, YouTube, or Facebook?",
    a: "Absolutely! You can resize photos to fit specific social media dimensions like Instagram posts, YouTube thumbnails, and Facebook cover photos.",
  },
  {
    q: "Is my uploaded image safe?",
    a: "Yes, your privacy is protected. All image processing happens securely, and we never store your files on our servers.",
  },
  {
    q: "Does it support PNG, JPG, and WebP formats?",
    a: "Yes, our image converter supports multiple formats including JPG, PNG, WebP, and more — easily convert between them in seconds.",
  },
  {
    q: "Do I need to install any software?",
    a: "No installations required! The tool runs directly in your browser. Just upload your image and start editing instantly.",
  },
  {
    q: "Can I use this on my phone?",
    a: "Yes, our image tools are fully responsive. You can use them on Android, iPhone, tablet, or desktop devices.",
  },
  {
    q: "What are the benefits of resizing an image?",
    a: "Resizing helps improve website performance, saves storage space, and ensures perfect fit for designs and posts — essential for SEO and speed.",
  },
  {
    q: "Why should I use the All-in-One Image Hub?",
    a: "Because it’s fast, easy, and packed with everything — resizer, compressor, converter, and cropper — all built for creators, web designers, and casual users alike.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-950 to-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Header with 3D Motion */}
      <motion.header
        initial={{ opacity: 0, y: -100, rotateX: 25 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center py-20 px-4 perspective-1000"
      >
        <motion.h1
          initial={{ scale: 0.8, rotateY: 15 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl font-extrabold text-cyan-400 drop-shadow-lg"
        >
          ⚡ All-in-One Image Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 text-lg text-center max-w-2xl"
        >
          Resize, compress, crop, and convert your images with one simple online tool.
        </motion.p>
      </motion.header>

      {/* Projects Section with smooth scroll animation */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 max-w-6xl mx-auto mt-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, rotateY: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              name={project.name}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </section>

      {/* FAQ Section with 3D fade-in */}
      <motion.section
        initial={{ opacity: 0, y: 100, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-28 px-4 max-w-4xl mx-auto space-y-8"
      >
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-cyan-400/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">{faq.q}</h3>
            <p className="text-gray-300">{faq.a}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center py-10">
        © {new Date().getFullYear()} All-in-One Image Hub. All rights reserved.
      </footer>
    </div>
  );
}
