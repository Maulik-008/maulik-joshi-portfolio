export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-20 h-20 border border-cyan-400 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-blue-400 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ABOUT
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
                ME
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 transform scale-x-0 animate-pulse"></div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400"></div>
              <div className="pl-8 space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    Full Stack Developer
                  </span>{" "}
                  with 4+ years of experience building modern, scalable web
                  applications. My expertise lies in creating seamless user
                  experiences with cutting-edge technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I've worked on innovative projects ranging from{" "}
                  <span className="text-blue-400 font-semibold">
                    AI-powered SaaS platforms
                  </span>{" "}
                  to music community applications, always focusing on clean
                  code, performance optimization, and delivering exceptional
                  user experiences.
                </p>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative overflow-hidden">
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                  <div className="text-cyan-400 font-mono text-sm mb-2">
                    LOCATION
                  </div>
                  <div className="text-white font-semibold">Gujarat, India</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Right content - Education */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.1)] group">
              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  EDUCATION
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-2">
                      Bachelor of Engineering (B.E)
                    </h4>
                    <p className="text-gray-200 font-medium mb-1">
                      Information Technology
                    </p>
                    <p className="text-gray-400 mb-2">
                      Gujarat Technological University
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-gray-400">2018 - 2022</span>
                      <span className="text-cyan-400 font-mono">
                        CGPA: 8.56
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
