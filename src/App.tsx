import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NuestraEmpresa from './pages/NuestraEmpresa';
import ScrollToTop from './components/Scrolls/ScrollToTop';
import Servicios from './pages/Servicios';
import ScrollToHash from './components/Scrolls/ScrollToHash';

function App() {
  useEffect(() => {
    // Cargar Bootstrap JS
    const bootstrapScript = document.createElement('script');
    bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    bootstrapScript.async = true;
    document.body.appendChild(bootstrapScript);

    return () => {
      document.body.removeChild(bootstrapScript);
    };
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <ScrollToHash />
      
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nuestra-empresa" element={<NuestraEmpresa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
