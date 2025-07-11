import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Order Now", path: "/order" },
    { name: "Contact Us", path: "/contact" },
    { name: "Reviews", path: "/reviews" },
  ];

  return (
    <nav className="bg-white bg-opacity-90 shadow-md fixed w-full top-0 left-0 z-50 border-b border-latte backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-caramel text-2xl font-bold tracking-wide">
            🍰 SweetSpot
          </span>
        </Link>

        <div className="flex-1 flex justify-center">
          <nav className="flex gap-6 font-medium text-sm uppercase tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-mocha hover:text-caramel transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-latte rounded-full px-4 py-1.5 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-caramel transition"
            />
          </div>
          <Link to="/favorites" className="text-mocha hover:text-caramel">
            <Heart className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="text-mocha hover:text-caramel">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <Link to="/profile" className="text-mocha hover:text-caramel">
            <User className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
