
import './/styles/app.css';
import Footer from './components/footer';
import Hero from './components/hero';
import Philosophy from './components/philosophy';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <Hero />
      <Philosophy />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
