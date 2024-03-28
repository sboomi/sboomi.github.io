function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="sticky top-0">
        <h1 className="text-3xl">Shadi Boomi</h1>
      </header>

      <nav className="container mx-auto px-4 top-0 bottom-0 left-0">
        <ul className="flex flex-col sm:justify-center space-x-4">
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Accomplishments</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <section>
        <h2>Introduction</h2>
        <p>This is a short, typical introduction.</p>
      </section>

      <footer className="pt-8 text-base font-semibold leading-7 text-gray-900">
        &copy; <span>{year}</span> Github Pages. All rights reserved.
      </footer>
    </>
  );
}

export default App;
