
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Community Dreams Foundation",
    period: "Dec 2024 - Present",
    location: "Remote",
    description: [
      "Led front-end development for the organization's digital outreach platform",
      "Integrated third-party APIs for donor management and event scheduling",
      "Deployed and maintained AWS-based services for the foundation's projects",
      "Collaborated with cross-functional teams to implement user feedback",
      "Optimized website performance, reducing load time by 35%"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-portfolio-darkGray mb-3">Experience</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray">My professional journey in the tech world.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-darkGray">{exp.role}</h3>
                  <h4 className="text-lg text-portfolio-blue font-medium">{exp.company}</h4>
                </div>
                
                <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                  <div className="flex items-center text-portfolio-gray">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-portfolio-gray mt-1">
                    <MapPin size={16} className="mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex text-portfolio-gray">
                      <Briefcase size={16} className="mr-3 flex-shrink-0 mt-1 text-portfolio-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
