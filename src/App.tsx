import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Hero />
      <About />
      <MenuHighlights />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
