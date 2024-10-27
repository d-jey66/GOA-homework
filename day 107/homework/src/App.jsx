import Header from './components/Header';
import Hero from './components/Hero';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
