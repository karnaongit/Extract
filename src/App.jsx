import { Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Layout from './components/layout/Layout';

// Import pages
import Home from './pages/Home';
import Products from './pages/Products';
import Applications from './pages/Applications';
import Quality from './pages/Quality';
import About from './pages/About';
import Founders from './pages/Founders';
import Contact from './pages/Contact';

function App() {
  useSmoothScroll();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/about" element={<About />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;