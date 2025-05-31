import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-black/95 backdrop-blur-2xl border-b border-cyan-400/30 shadow-[0_0_50px_rgba(0,255,255,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Animated background grid for navbar */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50"></div>

      {/* Flowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-2 left-2/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Enhanced Logo - Fixed spacing */}
          <div className="text-lg sm:text-xl md:text-2xl font-bold relative group flex-shrink-0">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              MJ.dev
            </span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          {/* Enhanced Desktop Menu - Better spacing and responsive */}
          <div className="hidden lg:flex space-x-3 xl:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-500 relative group font-medium text-sm xl:text-base px-2 py-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}

                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:w-full"></span>

                {/* Hover background */}
                <span className="absolute inset-0 bg-cyan-400/5 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></span>

                {/* Glowing particles on hover */}
                <span className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 transform -translate-x-1/2 -translate-y-2"></span>
              </a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 sm:p-3 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] relative group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isOpen ? (
              <X size={20} className="relative z-10" />
            ) : (
              <Menu size={20} className="relative z-10" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-2xl rounded-2xl mb-4 border border-gray-700 overflow-hidden animate-fade-in">
            {/* Mobile menu background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.03)_50%,transparent_65%)] bg-[length:20px_20px]"></div>

            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 sm:px-6 py-3 sm:py-4 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-500 font-medium relative group text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute left-0 top-0 w-1 h-full bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
