import { NavLink } from "react-router";

export function Navbar() {
  const navItems = ["About", "Resume", "Skills", "Contact", "Projects"];

  return (
    <nav className="py-6">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
