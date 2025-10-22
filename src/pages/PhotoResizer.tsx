"use client";

import React, { useState, useRef, useEffect } from "react";

export default function PhotoResizer() {
  const [image, setImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(300);
  const [dpi, setDpi] = useState<number>(72);
  const [quality, setQuality] = useState<number>(0.9);
  const [targetSize, setTargetSize] = useState<number | null>(null);
  const [approxSize, setApproxSize] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle image upload
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  // Update approximate size live
  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);
      let dataUrl = canvas.toDataURL("image/jpeg", quality);

      if (targetSize) {
        let currentQuality = quality;
        let size = Math.round((dataUrl.length * 3) / 4 / 1024);
        while (size > targetSize && currentQuality > 0.05) {
          currentQuality -= 0.05;
          dataUrl = canvas.toDataURL("image/jpeg", currentQuality);
          size = Math.round((dataUrl.length * 3) / 4 / 1024);
        }
      }

      const finalSizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
      setApproxSize(`${finalSizeKB} KB`);
    };
  }, [image, width, height, quality, targetSize]);

  // Handle download
  const handleResize = () => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = image;

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      let currentQuality = quality;
      let dataUrl = canvas.toDataURL("image/jpeg", currentQuality);

      if (targetSize) {
        let size = Math.round((dataUrl.length * 3) / 4 / 1024);
        while (size > targetSize && currentQuality > 0.05) {
          currentQuality -= 0.05;
          dataUrl = canvas.toDataURL("image/jpeg", currentQuality);
          size = Math.round((dataUrl.length * 3) / 4 / 1024);
        }
      }

      const link = document.createElement("a");
      link.download = `resized-image.jpg`;
      link.href = dataUrl;
      link.click();
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white px-6 py-10 scroll-smooth">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 text-center glow">
        ⚡ Image Resizer
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Upload your photo, adjust dimensions, DPI, quality %, or target file size (KB), and download instantly.
      </p>

      <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-lg flex flex-col items-center gap-6">
        {/* Upload Button */}
        <label
          htmlFor="upload"
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-500 transition px-6 py-3 rounded-xl font-semibold mb-4 glow"
        >
          Upload Image
        </label>
        <input id="upload" type="file" accept="image/*" className="hidden" onChange={handleUpload} />

        {/* Preview */}
        {image && (
          <>
            <img src={image} alt="Preview" className="rounded-2xl shadow-md max-h-64 object-contain mb-4 transition-transform hover:scale-105" />

            {/* Controls */}
            <div className="flex flex-col gap-4 w-full">
              {/* Resolution */}
              <div>
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>Width: {width}px</span>
                  <span>Height: {height}px</span>
                </div>
                <div className="flex gap-3">
                  <input
                    type="number"
                    value={width}
                    min={50}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-1/2 focus:outline-none"
                    onChange={(e) => setWidth(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    value={height}
                    min={50}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-1/2 focus:outline-none"
                    onChange={(e) => setHeight(Number(e.target.value))}
                  />
                </div>
              </div>

              {/* DPI */}
              <div>
                <label className="text-gray-300 text-sm mb-1">DPI: {dpi}</label>
                <input
                  type="number"
                  value={dpi}
                  min={72}
                  max={600}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full focus:outline-none"
                  onChange={(e) => setDpi(Number(e.target.value))}
                />
              </div>

              {/* Quality */}
              <div>
                <label className="text-gray-300 text-sm mb-1">Quality: {Math.round(quality * 100)}%</label>
                <input
                  type="range"
                  min={0.05}
                  max={1}
                  step={0.05}
                  value={quality}
                  className="w-full"
                  onChange={(e) => setQuality(Number(e.target.value))}
                />
              </div>

              {/* Target File Size */}
              <div>
                <label className="text-gray-300 text-sm mb-1">Target File Size (KB):</label>
                <input
                  type="number"
                  value={targetSize || ""}
                  min={1}
                  placeholder="Optional, e.g., 100"
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full focus:outline-none"
                  onChange={(e) => setTargetSize(Number(e.target.value))}
                />
              </div>

              {/* Approx Output Size */}
              {approxSize && <p className="text-gray-300 text-sm mt-1">Approx. Output Size: {approxSize}</p>}
            </div>

            <button
              onClick={handleResize}
              className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 rounded-xl font-bold text-lg transition glow mt-4"
            >
              Resize & Download
            </button>
          </>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
