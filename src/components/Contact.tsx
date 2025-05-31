
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/10 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/5 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-cyan-300/10 animate-ping"></div>
        
        {/* Flowing particles */}
        <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                GET IN
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
                TOUCH
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse"></div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 animate-pulse"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Let's connect and create something amazing together!
          </p>
        </div>

        {/* Contact Information - Centered Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, label: "EMAIL", value: "mb.dev08@gmail.com", href: "mailto:mb.dev08@gmail.com" },
              { icon: Phone, label: "PHONE", value: "+91 6355043161", href: "tel:6355043161" },
              { icon: MapPin, label: "LOCATION", value: "Gujarat, India", href: null }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:scale-105">
                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-cyan-400/10 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-blue-400/10 to-transparent"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="inline-flex p-4 bg-cyan-400/10 rounded-xl border border-cyan-400/30 group-hover:bg-cyan-400/20 transition-all duration-300 mb-4 group-hover:scale-110">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-cyan-400 font-mono text-sm tracking-wider mb-2">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-cyan-400 transition-colors font-semibold text-lg break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    )}
                  </div>
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.1)_50%,transparent_65%)] bg-[length:20px_20px] animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
              CONNECT WITH ME
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
            </h3>
            
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Maulik-008"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:scale-110"
              >
                <Github className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-400/10 to-transparent"></div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/maulik-j-58b62917a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] hover:scale-110"
              >
                <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-cyan-400 transition-colors relative z-10" />
                <div className="absolute inset-0 bg-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-400/10 to-transparent"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-gray-700/50">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 MAULIK JOSHI. BUILT WITH REACT, TYPESCRIPT, AND TAILWIND CSS.
          </p>
          <div className="mt-4 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
