import { ModeToggle } from "@/components/ModeToggle";
import { NavLink } from "react-router";

export function Header() {
	return (
		<header className="fixed top-0 w-full h-16 bg-white shadow-md z-10 dark:bg-black">
			<div className="h-full flex items-center px-6 justify-between">
				<NavLink
					to="/"
					className="text-2xl font-bold hover:text-gray-700 transition-colors"
				>
					Shadi Boomi
				</NavLink>
				<ModeToggle />
			</div>
		</header>
	);
}

export default Header;
