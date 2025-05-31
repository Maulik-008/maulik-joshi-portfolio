
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Bacancy Technology",
      location: "Ahmedabad",
      period: "05/2024 - Present",
      achievements: [
        "Designed and implemented highly responsive user interface components using React.js",
        "Built reusable components and front-end libraries for future use",
        "Integrated RESTful APIs and GraphQL to fetch and manage data dynamically",
        "Facilitated training sessions for interns on React design patterns and best practices",
        "Optimized application performance through code optimization and lazy loading"
      ]
    },
    {
      title: "Software Engineer",
      company: "Zignuts Technolab",
      location: "Gandhinagar",
      period: "01/2022 - 05/2024",
      achievements: [
        "Developed and maintained responsive web applications using React.js, Next.js, and TypeScript",
        "Implemented advanced React design patterns including custom hooks and context API",
        "Led code reviews for junior developers and provided mentorship",
        "Managed client interactions and facilitated regular client calls",
        "Enhanced application architecture and maintainability using modern design patterns"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-950/50 to-gray-900/30">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-24 h-24 border border-cyan-400/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-blue-400/10 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-400/5 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-cyan-300/10 animate-bounce"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-400/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-blue-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WORK
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
                EXPERIENCE
              </span>
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse"></div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-4 animate-pulse"></div>
          
          {/* Experience badge */}
          <div className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full border border-cyan-400/40 backdrop-blur-xl">
            <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-cyan-400 font-mono text-xl font-bold tracking-wider">4+ YEARS OF EXPERIENCE</span>
          </div>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400 animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.3)]"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Enhanced timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-black shadow-[0_0_30px_rgba(0,255,255,0.6)] z-10 animate-pulse"></div>
                
                {/* Enhanced content card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="group relative overflow-hidden bg-gradient-to-br from-gray-900/95 to-gray-800/90 backdrop-blur-2xl p-8 rounded-3xl border border-gray-700/50 hover:border-cyan-400/60 transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,255,255,0.15)] hover:scale-105">
                    {/* Enhanced corner decorations */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-400/15 to-transparent rounded-br-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-tl-3xl"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                            <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
                            {exp.title}
                          </h3>
                          <p className="text-xl text-cyan-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                          <div className="flex items-center text-gray-400 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-mono text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-400 bg-gray-800/60 backdrop-blur-sm px-4 py-2 rounded-lg">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="font-mono text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Achievements */}
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start group/achievement">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/achievement:bg-blue-400 transition-colors animate-pulse"></div>
                            <p className="text-gray-300 leading-relaxed group-hover/achievement:text-gray-200 transition-colors">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Enhanced animated background pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.1)_50%,transparent_65%)] bg-[length:30px_30px] animate-pulse"></div>
                    </div>
                    
                    {/* Glowing border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl -z-10"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
