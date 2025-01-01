import { Link } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/334af0a0-cffd-4357-acb9-e501d6e6bbd7.png" alt="Tasty Logo" className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/profile" className="nav-link">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="nav-link">
              <ShoppingBag className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;