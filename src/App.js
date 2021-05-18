import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const fields = ['about', 'github', 'contact'];

  return (
    <div>
      <Header />
      <Navbar fields={fields} />
      <Footer />
    </div>
  );
}

export default App;
