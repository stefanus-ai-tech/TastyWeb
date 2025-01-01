import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/faq" className="hover:underline">FAQ</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Copyright ©2024, All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms and Condition</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;