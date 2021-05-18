import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const links = [
    {
      title: 'github',
      url: 'https://github.com/sboomi',
    },
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/shadiboomi/',
    },
  ];

  return (
    <div>
      <Header />
      <Navbar fields={links} />
      <Footer />
    </div>
  );
}

export default App;
