
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none animate-pulse"></div>
      
      {/* Moving geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400/10 rotate-12 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-cyan-400/5 rotate-45 animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 border border-cyan-300/10 animate-spin-slow"></div>
      </div>

      {/* Flowing particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-2000 opacity-40"></div>
      </div>

      {/* Gradient overlays */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-cyan-400/2 to-transparent pointer-events-none"></div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
