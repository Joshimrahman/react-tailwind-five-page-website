import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          MyWebsite
        </h1>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`${
          menuOpen ? "flex" : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:flex flex-col md:flex-row gap-5 p-6 md:p-0 z-50`}>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-300 font-medium"
            >
              {link.name}
            </Link>
          ))}

        </nav>

      </div>

    </header>
  );
}

export default Header;