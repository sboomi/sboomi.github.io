import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<div className="flex flex-1 pt-16">
				{/* Sidebar container */}
				<div className="w-64 bg-gray-100 fixed top-16 bottom-0 left-0 flex flex-col">
					<Navbar />
					<div className="flex-1" />{" "}
					{/* This empty div will push the footer to the bottom */}
					<Footer />
				</div>
				<main className="ml-64 flex-1 p-6 overflow-y-auto">{children}</main>
			</div>
		</div>
	);
};

export default Layout;
