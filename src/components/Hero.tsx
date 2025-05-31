import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
} from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20 md:pt-24"
    >
      {/* Enhanced Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large geometric shapes with improved animations */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-blue-400/30 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rotate-45 animate-bounce"></div>

        {/* Enhanced glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* New floating elements */}
        <div className="absolute top-10 right-10 w-8 h-8 border border-cyan-300/30 rotate-45 animate-ping"></div>
        <div className="absolute bottom-10 left-10 w-6 h-6 bg-blue-400/20 rotate-45 animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 max-w-3xl animate-fade-in text-center lg:text-left">
            {/* Enhanced Main heading */}
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-3 sm:mb-4 relative">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  MAULIK
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  JOSHI
                </span>
              </h1>
              {/* Enhanced decorative lines */}
              <div className="absolute -top-4 left-0 right-0 lg:right-auto w-20 sm:w-32 h-0.5 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-400 via-transparent to-transparent animate-pulse"></div>
              <div className="absolute -bottom-4 left-0 right-0 lg:right-auto w-32 sm:w-48 h-0.5 mx-auto lg:mx-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-transparent animate-pulse delay-300"></div>
            </div>

            <div className="relative mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-200 mb-2 font-light tracking-wide animate-fade-in delay-300">
                FULL STACK DEVELOPER
              </h2>
              <div className="text-cyan-400 text-base sm:text-lg font-mono mb-4 sm:mb-6 animate-fade-in delay-500">
                &lt;/&gt; 4+ YEARS EXPERIENCE
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed font-light animate-fade-in delay-700 mx-auto lg:mx-0">
              Specialized in React, Next.js, and TypeScript. Building innovative
              web applications with cutting-edge technologies and modern
              architectural patterns.
            </p>

            {/* Resume Download Button */}
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-10 animate-fade-in delay-600">
              <a
                href="https://drive.google.com/file/d/1dyt2BXuQPDwjrS7mnEn-kJRZ-PqcLup4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
                <Download className="w-4 h-4 group-hover:animate-bounce" />

                {/* Animated background effect */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                {/* Pulse effect on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-400 via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 group-hover:animate-pulse rounded-xl"></span>
              </a>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-12 sm:mb-16 animate-fade-in delay-500">
              <a
                href="mailto:mb.dev08@gmail.com"
                className="group relative p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-110"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://www.linkedin.com/in/maulik-j-58b62917a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-110"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a
                href="https://github.com/Maulik-008"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 sm:p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-110"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-cyan-400 transition-colors" />
                <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </div>
          </div>

          {/* Profile Image - Now visible on all screen sizes */}
          <div className="flex justify-center items-center animate-fade-in delay-300 mt-4 sm:mt-0">
            <div className="relative group">
              {/* Animated border rings - scale down on smaller screens */}
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full animate-spin-slow opacity-75 blur-xl"></div>
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse opacity-60"></div>

              {/* Profile image container - smaller on mobile */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-[0_0_80px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_120px_rgba(0,255,255,0.5)] transition-all duration-700">
                <img
                  src="/portfolio-uploads/4dca3d47-c6f5-4abd-9914-21b0fa819c48.png"
                  alt="Maulik Joshi"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating particles around image */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-12 left-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300 opacity-80"></div>
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-700 opacity-70"></div>
              <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-1000 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-1000">
        <a
          href="#about"
          className="inline-flex flex-col items-center space-y-1 sm:space-y-2 text-gray-500 hover:text-cyan-400 transition-colors duration-300 group"
        >
          <span className="text-xs sm:text-sm font-mono tracking-widest animate-pulse">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-600 rounded-full relative group-hover:border-cyan-400 transition-colors">
            <div className="w-1 h-2 bg-gray-600 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 group-hover:bg-cyan-400 transition-colors animate-bounce"></div>
          </div>
          <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
