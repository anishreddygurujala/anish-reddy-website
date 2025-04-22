
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing using Stripe API.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Stripe API"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Real-Time Event Detection System",
    description: "A system that processes and analyzes data streams to detect events in real-time, utilizing AWS services for scalability and reliability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "AWS Lambda", "DynamoDB", "CloudWatch", "S3"],
    github: "#",
    liveDemo: "#",
  },
  {
    title: "Responsive Portfolio Site",
    description: "A clean, modern portfolio website with responsive design principles, smooth animations, and optimized performance.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    github: "#",
    liveDemo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-portfolio-darkGray mb-3">Projects</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray">Here are some of the projects I've worked on recently.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-delay-${index + 1}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-portfolio-darkGray mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-portfolio-lightBlue text-portfolio-darkBlue hover:bg-portfolio-lightBlue/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto flex gap-4">
                <Button asChild variant="outline" size="sm" className="flex-1 border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightBlue">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" /> Code
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1 bg-portfolio-blue hover:bg-portfolio-darkBlue">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" /> Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
