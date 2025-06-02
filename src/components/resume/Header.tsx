interface LanguageProps {
	name: string;
	level: string;
}

function Header({ languages }: { languages: LanguageProps[] }) {
	return (
		<div>
			<header className="container mx-auto px-4 lg:px-0 flex flex-col max-w-screen-md items-center space-y-2">
				<h1 className="text-4xl text-center">Shadi Boomi</h1>
				<div className="flex flex-wrap justify-center gap-0.5 text-center">
					<span>shadi.boomi@gmail.com</span>
					<span>|</span>
					<span>https://sboomi.github.io/</span>
					<span>|</span>
					<span>https://github.com/sboomi/</span>
				</div>
				<div>
					{languages && (
						<div className="flex flex-wrap justify-center gap-0.5 text-xs text-center">
							{languages.map((language, index) => (
								<span key={language.name}>
									{index > 0 && ", "}
									{language.name} ({language.level})
								</span>
							))}
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default Header;
