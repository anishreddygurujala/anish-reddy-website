
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-portfolio-darkGray mb-3">About Me</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-blue to-portfolio-lightBlue rounded-lg blur-sm opacity-75"></div>
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2e9a44e9-333f-4a27-bc40-b89b22b31fb0.png"
                  alt="Anish Reddy Gurujala"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-darkGray">Who I Am</h3>
              <p className="text-portfolio-gray">
                I recently completed my Master's in Computer Science. I'm passionate about building modern web applications, especially in the e-commerce domain. 
              </p>
              <p className="text-portfolio-gray">
                My approach combines clean code, user-centered design, and technical innovation to create solutions that are not only functional but also delightful to use.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-portfolio-darkGray">My Tech Arsenal</h3>
              <p className="text-portfolio-gray">
                My tech stack includes React.js, JavaScript (ES6+), Node.js, and AWS. I enjoy working across the full stack and continuously expand my knowledge in emerging technologies.
              </p>
            </div>
            
            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightBlue mt-4">
              <a href="/anish-reddy-resume.pdf" download>
                <Download className="mr-2" size={16} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
