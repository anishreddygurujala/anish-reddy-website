
const skills = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3/SASS", "Redux", "Tailwind CSS"],
    icon: "💻"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Python"],
    icon: "🔧"
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    icon: "🗄️"
  },
  {
    category: "DevOps & Tools",
    items: ["AWS", "CI/CD", "Git", "Docker", "Webpack", "Jest"],
    icon: "⚙️"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-portfolio-darkGray mb-3">Skills</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray">My technical toolkit and areas of expertise.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300 overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-portfolio-blue"></div>
              <span className="text-3xl mb-4 block">{skillGroup.icon}</span>
              <h3 className="text-xl font-semibold text-portfolio-darkGray mb-4 group-hover:text-portfolio-blue transition-colors duration-300">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center text-portfolio-gray">
                    <div className="w-2 h-2 rounded-full bg-portfolio-blue mr-3"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
