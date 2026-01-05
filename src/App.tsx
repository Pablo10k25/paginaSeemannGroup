import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NuestraEmpresa from './pages/NuestraEmpresa';
import Servicios from './pages/Servicios';

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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestra-empresa" element={<NuestraEmpresa />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
