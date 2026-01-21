import { Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/shared/ScrollToTop';

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
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products key="products" />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;