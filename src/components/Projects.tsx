
import { ExternalLink, Github, Star, Shield, Heart, Database, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Promptus Tech AI",
      description: "An innovative SAAS product for AI and prompt enthusiasts, featuring multi-model AI interactions including text-to-text, text-to-image, and text-to-voice conversions.",
      features: [
        "Canvas-based workflow system for prompt design",
        "Social community features with likes, comments, and follows",
        "Advanced React concepts with custom hooks and Redux Toolkit",
        "Clean, modular codebase with code standards enforcement"
      ],
      technologies: ["React", "Redux Toolkit", "React Query", "TypeScript", "Custom Hooks"],
      category: "AI & Machine Learning",
      icon: Database
    },
    {
      title: "Rippy",
      description: "A cutting-edge music community and distribution platform that connects artists and music enthusiasts worldwide.",
      features: [
        "Responsive and interactive user interfaces",
        "Custom hooks and modern frontend techniques",
        "Performance optimization for seamless user experience",
        "Regular client meetings and requirement gathering"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Custom Hooks", "Performance Optimization"],
      category: "Social Platform",
      icon: Users
    },
    {
      title: "Synectus Healthcare",
      description: "A comprehensive medical hospital management system designed to streamline healthcare operations and improve patient care quality.",
      features: [
        "Electronic Health Records (EHR) management system",
        "Real-time patient monitoring and vital signs tracking",
        "Advanced appointment scheduling with automated reminders",
        "Integrated billing and insurance claim processing",
        "Telemedicine capabilities for remote consultations"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Material-UI", "JWT"],
      category: "Healthcare",
      icon: Heart
    },
    {
      title: "Synectus Medical Insurance",
      description: "A sophisticated medical insurance platform providing seamless claim management, policy administration, and customer service automation.",
      features: [
        "AI-powered claim processing and fraud detection",
        "Real-time policy management and premium calculations",
        "Mobile-first responsive design for all devices",
        "Integration with healthcare providers and pharmacies",
        "Comprehensive analytics dashboard for insurers"
      ],
      technologies: ["Next.js", "TypeScript", "GraphQL", "MongoDB", "Stripe", "AI Integration"],
      category: "FinTech",
      icon: Shield
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950/50 relative overflow-hidden">
      {/* Enhanced background geometric elements with more animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 border border-cyan-400/5 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-blue-400/5 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-400/5 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 border border-cyan-300/5 animate-spin-slow"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-blue-400/5 rotate-45 animate-bounce"></div>
        <div className="absolute top-20 right-1/3 w-12 h-12 border border-cyan-500/10 rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-1/3 w-14 h-14 bg-cyan-400/3 rotate-45 animate-ping delay-1000"></div>
      </div>

      {/* Enhanced flowing particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/5 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-1/5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-blue-300 rounded-full animate-bounce delay-300 opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping delay-700 opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FEATURED
              </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
                PROJECTS
              </span>
            </h2>
            <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 animate-pulse"></div>
            {/* Enhanced glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl opacity-50 animate-pulse"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mt-6 animate-pulse"></div>
          
          {/* Project categories badge */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/30 font-mono text-sm animate-pulse">
              AI DEVELOPMENT
            </span>
            <span className="px-4 py-2 bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/30 font-mono text-sm animate-pulse delay-200">
              FRONTEND
            </span>
            <span className="px-4 py-2 bg-cyan-300/10 text-cyan-300 rounded-full border border-cyan-300/30 font-mono text-sm animate-pulse delay-400">
              BACKEND
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl rounded-3xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-700 hover:shadow-[0_0_80px_rgba(0,255,255,0.2)] hover:transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Enhanced corner decorations */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-400/15 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/15 to-transparent"></div>
              
              {/* Enhanced category badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="flex items-center space-x-2 bg-gray-800/70 backdrop-blur-xl px-3 py-1.5 rounded-full border border-cyan-400/30 animate-pulse">
                  <project.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 tracking-wider">{project.category}</span>
                </div>
              </div>
              
              <div className="relative z-10 p-8 pt-16">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white relative mb-2 group-hover:text-cyan-100 transition-colors">
                      {project.title}
                      <div className="absolute -bottom-1 left-0 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
                    </h3>
                  </div>
                  <div className="flex space-x-3">
                    <button className="group/btn relative p-3 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:scale-110">
                      <Github className="w-5 h-5 text-gray-400 group-hover/btn:text-cyan-400 transition-colors" />
                      <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="group/btn relative p-3 bg-gray-800/50 rounded-xl border border-gray-600 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:scale-110">
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover/btn:text-cyan-400 transition-colors" />
                      <div className="absolute inset-0 bg-cyan-400/5 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">{project.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2 animate-pulse" />
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/feature">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover/feature:bg-blue-400 transition-colors duration-300 animate-pulse"></div>
                        <span className="text-gray-300 group-hover/feature:text-gray-200 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-mono text-gray-500 mb-4 tracking-widest">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-800/50 text-cyan-400 text-sm rounded-lg border border-cyan-400/30 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-500 cursor-default font-mono hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced animated background pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(0,255,255,0.1)_50%,transparent_65%)] bg-[length:40px_40px] animate-pulse"></div>
              </div>

              {/* Enhanced floating particles on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-100"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-500"></div>
                <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
