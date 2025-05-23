
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-darkBlue text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {currentYear} Anish Reddy Gurujala. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
