import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import ReproductorCaminos from './components/ReproductorCaminos.jsx';
import ReproductorLove from './components/ReproductorLove.jsx';
import ReproductorDocumental from './components/ReproductorDocumental.jsx';
import Nosotros from './components/Nosotros.jsx';
import Alquiler from './components/Alquiler.jsx';
import Contacto from './components/Contacto.jsx';
import Proyectos from './components/Proyectos.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ReproductorCaminos" element={<ReproductorCaminos />} />
        <Route path="/ReproductorLove" element={<ReproductorLove />} />
        <Route path="/ReproductorDocumental" element={<ReproductorDocumental />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Alquiler" element={<Alquiler />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
