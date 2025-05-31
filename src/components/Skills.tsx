
import { Code, Database, Globe, Zap, Brain, Layers, Cpu, Rocket } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      gradient: "from-cyan-400 to-blue-400",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Redux Toolkit", "Zustand", "React Query"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      gradient: "from-blue-400 to-purple-400",
      skills: ["Node.js", "SQL", "PostgreSQL", "MongoDB", "GraphQL", "RESTful APIs", "Express.js", "Prisma"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Tools & Frameworks",
      gradient: "from-purple-400 to-pink-400",
      skills: ["Webpack", "Vite", "Material UI", "Tailwind CSS", "Cypress", "Playwright", "Docker", "Git"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Core Expertise",
      gradient: "from-pink-400 to-cyan-400",
      skills: ["Problem Solving", "Code Review", "Mentoring", "Performance Optimization", "System Design", "Agile Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-black/90 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-cyan-400/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-400/10 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/5 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-purple-400/10 animate-ping"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-cyan-400/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-blue-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/6 w-32 h-32 bg-purple-400/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Flowing particles */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-5/6 left-2/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            {/* Experience badge */}
            <div className="mb-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full border border-cyan-400/40 backdrop-blur-xl">
              <Brain className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-cyan-400 font-mono text-sm font-bold tracking-wider">4+ YEARS OF EXPERTISE</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
                SKILLS &
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                TECHNOLOGIES
              </span>
            </h2>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 left-1/4 w-24 h-0.5 bg-gradient-to-r from-cyan-400 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute -bottom-4 right-1/4 w-32 h-0.5 bg-gradient-to-l from-blue-400 via-purple-400 to-transparent animate-pulse delay-300"></div>
          </div>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-8 leading-relaxed">
            Mastering cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/70 backdrop-blur-2xl rounded-3xl border border-gray-700/50 hover:border-cyan-400/60 transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,255,255,0.2)] hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced corner decorations */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/15 to-transparent rounded-br-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-tl-3xl"></div>
              
              {/* Floating elements inside card */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
              <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse delay-500"></div>
              
              <div className="relative z-10 p-8">
                {/* Enhanced icon with gradient background */}
                <div className="relative mb-6 inline-block">
                  <div className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-black">
                      {category.icon}
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>
                
                {/* Enhanced title */}
                <h3 className="text-xl font-bold text-white mb-6 relative">
                  {category.title}
                  <div className={`absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </h3>
                
                {/* Enhanced skills with better animations */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="relative group/skill"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className="text-gray-300 text-sm bg-gray-800/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-500 hover:bg-gray-700/60 cursor-default hover:scale-105 animate-fade-in">
                        <span className="relative z-10 font-medium">{skill}</span>
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                        
                        {/* Skill hover effect */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-l-xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.1)_50%,transparent_65%)] bg-[length:30px_30px] animate-pulse"></div>
              </div>
              
              {/* Glowing border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-xl -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Additional tech icons section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block">
            TECHNOLOGIES I WORK WITH
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"></div>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Layers className="w-6 h-6" />, name: "React" },
              { icon: <Cpu className="w-6 h-6" />, name: "Node.js" },
              { icon: <Database className="w-6 h-6" />, name: "PostgreSQL" },
              { icon: <Globe className="w-6 h-6" />, name: "TypeScript" },
              { icon: <Rocket className="w-6 h-6" />, name: "Next.js" },
              { icon: <Code className="w-6 h-6" />, name: "Tailwind" }
            ].map((tech, index) => (
              <div
                key={index}
                className="group relative p-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-110 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-cyan-400 group-hover:text-white transition-colors mb-2">
                  {tech.icon}
                </div>
                <p className="text-gray-400 text-xs font-mono group-hover:text-cyan-400 transition-colors">{tech.name}</p>
                <div className="absolute inset-0 bg-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
