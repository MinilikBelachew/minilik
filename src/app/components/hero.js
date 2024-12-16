"use client"


import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
    const imageRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
          if (!imageRef.current) return;
      
          const { clientX, clientY } = e;
          const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
          const x = (clientX - left) / width - 0.5;
          const y = (clientY - top) / height - 0.5;
      
          imageRef.current.style.transform = `
            perspective(1000px)
            rotateY(${x * 10}deg)
            rotateX(${-y * 10}deg)
            translateZ(20px)
          `;
        };
      
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }, []);
      
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background with geometric patterns */}
      <div className="absolute inset-0 bg-[#0f172a]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
          
          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-8 gap-4 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-cyan-500/10 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-500 text-sm">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span>Available for work</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold space-y-3">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                  Hi there! 👋
                </span>
                <span className="block">
                  I'm Minilik Belachew
                </span>
              </h1>
              
              <p className="text-xl text-gray-400">
                Software Engineer crafting next-generation digital experiences
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group relative px-8 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <span className="absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0"></span>
                <span className="relative text-white font-medium">View Projects</span>
              </a>
              
              <a href="#contact" className="group px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative transition-transform duration-200 ease-out">
            <div className="relative w-[300px] h-[300px] mx-auto"> {/* Reduced size container */}
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-spin-slow opacity-75 blur-md"></div>
              
              {/* Image container */}
              <div className="absolute inset-4 rounded-2xl bg-[#0f172a] overflow-hidden backdrop-blur-xl border border-white/10">
                <div className="relative w-full h-full">
                  <Image
                    src="/one.jpg"
                    alt="Minilik Belachew"
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="rounded-2xl transform transition-transform hover:scale-105"
                  />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 top-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -left-4 bottom-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-16 border-2 border-cyan-500 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
}