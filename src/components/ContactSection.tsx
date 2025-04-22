
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-portfolio-darkGray mb-3">Get In Touch</h2>
          <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
          <p className="text-portfolio-gray">Have a question or want to work together? Drop me a message!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-portfolio-darkGray mb-6">Send Me a Message</h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-gray mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-gray mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-gray mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-portfolio-darkGray mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-start">
                  <Mail className="mr-3 text-portfolio-blue" />
                  <span className="text-portfolio-gray">anish.reddy@example.com</span>
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-portfolio-darkGray mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-300 text-portfolio-darkGray hover:text-portfolio-blue"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-300 text-portfolio-darkGray hover:text-portfolio-blue"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:anish.reddy@example.com" 
                  className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow duration-300 text-portfolio-darkGray hover:text-portfolio-blue"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-portfolio-darkGray mb-4">Let's Build Something Amazing</h3>
              <p className="text-portfolio-gray mb-4">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-lightBlue w-full">
                <a href="#" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
