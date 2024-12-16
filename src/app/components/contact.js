
"use client"
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        el.classList.add('opacity-100');
      });
    };

    // Trigger animations on mount
    animateElements();
  }, []);

  return (
    <section id="contact" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-600">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-500 animate-fade-in opacity-0">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-4 animate-fade-in opacity-0">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                belachewr35@gmail.com
              </p>
              <p className="flex items-center gap-4 animate-fade-in opacity-0">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +251937637782
              </p>
              <p className="flex items-center gap-4 animate-fade-in opacity-0">
                <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div className="relative space-y-6 animate-fade-in opacity-0">
            <h3 className="text-2xl font-bold text-blue-500">Connect With Me</h3>
            <p className="text-lg text-gray-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:belachewr35@gmail.com" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg text-center transition duration-300 hover:scale-105">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/minilik-belachew/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg text-center transition duration-300 hover:scale-105">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;