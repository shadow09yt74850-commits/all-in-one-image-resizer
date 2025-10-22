"use client";

import React, { useState, useRef, useEffect } from "react";

type ResizeResult = {
  dataUrl: string;
  w: number;
  h: number;
  sizeKB: number;
};

export default function PhotoResizer() {
  const [image, setImage] = useState<string | null>(null);
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);
  const [unit, setUnit] = useState<"px" | "%" | "cm" | "in">("px");
  const [dpi, setDpi] = useState<number>(72);
  const [targetSize, setTargetSize] = useState<number | null>(null);
  const [approxSize, setApproxSize] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const originalImageRef = useRef<HTMLImageElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const convertToPixels = (value: number, axis: "w" | "h"): number => {
    if (!originalImageRef.current) return value;
    const origW = originalImageRef.current.width;
    const origH = originalImageRef.current.height;

    switch (unit) {
      case "px":
        return value;
      case "%":
        return axis === "w" ? (value / 100) * origW : (value / 100) * origH;
      case "cm":
        return (value * dpi) / 2.54;
      case "in":
        return value * dpi;
      default:
        return value;
    }
  };

  const generateResizedImage = (img: HTMLImageElement, targetKB: number): ResizeResult => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    let wPx = Math.max(50, Math.round(convertToPixels(width, "w")));
    let hPx = Math.max(50, Math.round(convertToPixels(height, "h")));

    canvas.width = wPx;
    canvas.height = hPx;
    ctx.drawImage(img, 0, 0, wPx, hPx);

    let quality = 0.95;
    let dataUrl = canvas.toDataURL("image/jpeg", quality);
    let sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);

    let iter = 0;
    const maxIter = 50;

    while ((sizeKB < targetKB * 0.95 || sizeKB > targetKB * 1.05) && iter < maxIter) {
      iter++;
      const scaleFactor = Math.sqrt(targetKB / sizeKB);
      wPx = Math.max(50, Math.round(wPx * scaleFactor));
      hPx = Math.max(50, Math.round(hPx * scaleFactor));

      canvas.width = wPx;
      canvas.height = hPx;
      const ctx2 = canvas.getContext("2d")!;
      ctx2.drawImage(img, 0, 0, wPx, hPx);

      if (sizeKB > targetKB) quality = Math.max(0.05, quality - 0.05);
      else quality = Math.min(0.95, quality + 0.05);

      dataUrl = canvas.toDataURL("image/jpeg", quality);
      sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
    }

    return { dataUrl, w: wPx, h: hPx, sizeKB };
  };

  // Only update approx size, no width/height updates here
  useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.src = image;

    img.onload = () => {
      originalImageRef.current = img;

      if (targetSize) {
        const result = generateResizedImage(img, targetSize);
        setApproxSize(`${result.sizeKB} KB`);
      } else {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const wPx = Math.round(convertToPixels(width, "w"));
        const hPx = Math.round(convertToPixels(height, "h"));
        canvas.width = wPx;
        canvas.height = hPx;
        ctx.drawImage(img, 0, 0, wPx, hPx);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
        const sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
        setApproxSize(`${sizeKB} KB`);
      }
    };
  }, [image, width, height, unit, targetSize, dpi]);

  const handleResize = () => {
    if (!image) return;
    const img = new Image();
    img.src = image;

    img.onload = () => {
      let result: ResizeResult;
      if (targetSize) result = generateResizedImage(img, targetSize);
      else {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        const wPx = Math.round(convertToPixels(width, "w"));
        const hPx = Math.round(convertToPixels(height, "h"));
        canvas.width = wPx;
        canvas.height = hPx;
        ctx.drawImage(img, 0, 0, wPx, hPx);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
        const sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);
        result = { dataUrl, w: wPx, h: hPx, sizeKB };
      }

      const link = document.createElement("a");
      link.download = `resized-image.jpg`;
      link.href = result.dataUrl;
      link.click();

      setApproxSize(`${result.sizeKB} KB`);
    };
  };

  const adjustSize = (delta: number) => {
    if (!targetSize) return;
    setTargetSize(Math.max(1, targetSize + delta));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center text-white px-6 py-10 scroll-smooth">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 text-center glow">
        ⚡ Image Resizer
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Upload your photo, choose dimensions (px, %, cm, in) or target file size (KB), and download.
      </p>

      <div className="bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-lg flex flex-col items-center gap-6">
        <label
          htmlFor="upload"
          className="cursor-pointer bg-cyan-600 hover:bg-cyan-500 transition px-6 py-3 rounded-xl font-semibold mb-4 glow"
        >
          Upload Image
        </label>
        <input id="upload" type="file" accept="image/*" className="hidden" onChange={handleUpload} />

        {image && (
          <>
            <img src={image} alt="Preview" className="rounded-2xl shadow-md max-h-64 object-contain mb-4 transition-transform hover:scale-105" />

            <div className="flex flex-col gap-4 w-full">
              {/* Dimensions */}
              <div>
                <div className="flex justify-between text-gray-300 text-sm mb-1">
                  <span>Width: {width}</span>
                  <span>Height: {height}</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={width}
                    min={1}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-1/2 focus:outline-none"
                    onChange={(e) => setWidth(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    value={height}
                    min={1}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-1/2 focus:outline-none"
                    onChange={(e) => setHeight(Number(e.target.value))}
                  />
                  <select
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value as any)}
                  >
                    <option value="px">px</option>
                    <option value="%">%</option>
                    <option value="cm">cm</option>
                    <option value="in">in</option>
                  </select>
                </div>
              </div>

              {/* DPI */}
              {(unit === "cm" || unit === "in") && (
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
              )}

              {/* Target File Size */}
              <div>
                <label className="text-gray-300 text-sm mb-1">Target File Size (KB):</label>
                <div className="flex gap-2">
                  <button className="bg-gray-600 hover:bg-gray-500 px-3 rounded-lg" onClick={() => adjustSize(-10)}>
                    -10 KB
                  </button>
                  <input
                    type="number"
                    value={targetSize || ""}
                    min={1}
                    placeholder="Type size in KB"
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full focus:outline-none"
                    onChange={(e) => setTargetSize(Number(e.target.value))}
                  />
                  <button className="bg-gray-600 hover:bg-gray-500 px-3 rounded-lg" onClick={() => adjustSize(10)}>
                    +10 KB
                  </button>
                </div>
              </div>

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
