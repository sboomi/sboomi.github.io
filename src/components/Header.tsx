import { NavLink } from "react-router";

export function Header() {
  return (
    <header className="fixed top-0 w-full h-16 bg-white shadow-md z-10">
      <div className="h-full flex items-center px-6">
        <NavLink
          to="/"
          className="text-2xl font-bold hover:text-gray-700 transition-colors"
        >
          Shadi Boomi
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
