import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-indigo-600">
          TaskManager
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            Features
          </Link>
          <Link to="/" className="text-gray-600 hover:text-indigo-600">
            About
          </Link>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link to="/" className="block text-gray-600">
            Features
          </Link>
          <Link to="/" className="block text-gray-600">
            About
          </Link>
          <Link
            to="/login"
            className="block text-center bg-indigo-600 text-white py-2 rounded-md"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
