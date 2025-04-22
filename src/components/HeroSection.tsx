
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-darkGray tracking-tight">
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue">
                Anish Reddy Gurujala
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-portfolio-darkGray animate-fade-in-delay-1">
              Full Stack Developer | React.js Enthusiast
            </h2>
            
            <p className="text-lg text-portfolio-gray max-w-lg animate-fade-in-delay-2">
              Crafting responsive and dynamic web experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-delay-3">
              <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightBlue">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-blue to-portfolio-lightBlue rounded-lg blur-sm opacity-75"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
              <div className="aspect-square bg-gradient-to-br from-white to-portfolio-lightBlue/30 flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Developer at work"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
