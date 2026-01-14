import React, { useState, useEffect } from "react";
import {
  Upload,
  Image as ImageIcon,
  Sun,
  Moon,
  Sparkles,
  Download,
  RefreshCcw,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";

const App = () => {
  // State Management
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [styleImage, setStyleImage] = useState(null);
  const [contentImage, setContentImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [isGenerating, setIsGenerating] = useState(false);
  const [resultImage, setResultImage] = useState(null);

  // Constants
  const ratios = ["1:1", "4:3", "3:4", "16:9", "9:16"];

  // Persist Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Handlers
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "style") setStyleImage(reader.result);
        else setContentImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = (type) => {
    if (type === "style") setStyleImage(null);
    else setContentImage(null);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setResultImage(null);

    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      // Using a high-quality placeholder to simulate AI output
      setResultImage(`https://picsum.photos/seed/${Math.random()}/1200/800`);
    }, 3000);
  };

  const resetGeneration = () => {
    setResultImage(null);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b backdrop-blur-md bg-opacity-80 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              StyleClone<span className="text-indigo-500">.ai</span>
            </span>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600" />
            )}
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Reimagine Your Vision
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Upload a reference style and a target image. Our advanced AI will
            blend the textures and colors of the first onto the structure of the
            second.
          </p>
        </div>

        {/* Workspace */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Input Side */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Style Reference Upload */}
              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">
                    1
                  </span>
                  Style Reference
                </label>
                <div className="relative group h-64 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 flex items-center justify-center">
                  {styleImage ? (
                    <>
                      <img
                        src={styleImage}
                        alt="Style"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => clearImage("style")}
                        className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <label className="flex flex-col items-center gap-2 cursor-pointer p-6 text-center">
                      <Upload className="w-10 h-10 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                      <span className="text-sm text-slate-500">
                        Upload style reference
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, "style")}
                        accept="image/*"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Target Content Upload */}
              <div className="space-y-3">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">
                    2
                  </span>
                  Target Content
                </label>
                <div className="relative group h-64 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-indigo-500 transition-all bg-white dark:bg-slate-900 flex items-center justify-center">
                  {contentImage ? (
                    <>
                      <img
                        src={contentImage}
                        alt="Content"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => clearImage("content")}
                        className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <label className="flex flex-col items-center gap-2 cursor-pointer p-6 text-center">
                      <ImageIcon className="w-10 h-10 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                      <span className="text-sm text-slate-500">
                        Upload content image
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, "content")}
                        accept="image/*"
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Aspect Ratio Selection */}
            <div className="space-y-4">
              <label className="text-sm font-semibold flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs">
                  3
                </span>
                Select Aspect Ratio
              </label>
              <div className="flex flex-wrap gap-3">
                {ratios.map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                      aspectRatio === ratio
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                        : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-400"
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!styleImage || !contentImage || isGenerating}
              className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                !styleImage || !contentImage || isGenerating
                  ? "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 shadow-xl shadow-indigo-500/20 active:scale-[0.98]"
              }`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Styling Image...
                </>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  Generate Styled Image
                </>
              )}
            </button>
          </div>

          {/* Preview/Result Side */}
          <div className="lg:sticky lg:top-28">
            <div
              className={`relative w-full aspect-square md:aspect-video lg:aspect-square bg-slate-100 dark:bg-slate-900 rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden transition-all ${
                isGenerating ? "animate-pulse" : ""
              }`}
            >
              {!isGenerating && !resultImage && (
                <div className="text-center p-8 space-y-4">
                  <div className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-slate-500 font-medium">
                    Result will appear here
                  </p>
                </div>
              )}

              {isGenerating && (
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-24 h-24 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
                    <Sparkles className="w-8 h-8 text-indigo-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold text-slate-700 dark:text-slate-200">
                      Generating Masterpiece
                    </p>
                    <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto overflow-hidden">
                      <div className="h-full bg-indigo-600 animate-[loading_2s_ease-in-out_infinite]"></div>
                    </div>
                  </div>
                </div>
              )}

              {resultImage && !isGenerating && (
                <div className="w-full h-full relative group">
                  <img
                    src={resultImage}
                    alt="AI Result"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Action Badge */}
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <CheckCircle2 className="w-3 h-3" />
                    GENERATED
                  </div>

                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                      <Download className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Post-Generation Suite */}
            {resultImage && !isGenerating && (
              <div className="mt-8 flex gap-4">
                <button className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <Download className="w-5 h-5" />
                  Download PNG
                </button>
                <button
                  onClick={resetGeneration}
                  className="flex-1 bg-slate-900 dark:bg-indigo-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-colors"
                >
                  <RefreshCcw className="w-5 h-5" />
                  New Style
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Features Footer */}
        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 grid md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Neural Transfer</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Advanced VGG-19 architecture for high-fidelity style cloning.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold mb-1">High Resolution</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Output up to 4K resolution with enhanced texture detail.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold mb-1">Fast Export</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Instant downloads in various formats including SVG and PNG.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Global CSS for custom animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `,
        }}
      />
    </div>
  );
};

export default App;
