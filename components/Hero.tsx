'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 via-pink-900 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 via-transparent to-purple-900/50"></div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-0 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white animate-fade-in leading-tight">
            Hi, I'm <span className="text-purple-300">Denzel Charles</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-gray-300 animate-fade-in-delay px-2">
            I'm a <span className="text-purple-300">Police Officer</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-300 animate-fade-in-delay-2 px-2">
            and I'm learning to build with AI and Next.js
          </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in-delay-3 italic px-4">
                Bridging law enforcement expertise with cutting-edge technology to create innovative solutions ✨
              </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay-4 px-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-purple-500 hover:bg-purple-500 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s both;
        }
        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-fade-in-delay-4 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </section>
  )
}

