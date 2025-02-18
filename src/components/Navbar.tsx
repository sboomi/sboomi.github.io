export function Navbar() {
  const navItems = ["About", "Skills", "Contact", "Projects"];

  return (
    <nav className="py-6">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
