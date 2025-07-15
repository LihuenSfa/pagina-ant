import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Caminos from "./components/Caminos";
import Bridge from "./components/Bridge";
import YTC1 from "./components/YTC1";
import Footer from "./components/Footer";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectedPath = window.location.search.slice(1);
    if (redirectedPath) {
      // Previene loops si ya estamos en esa ruta
      if (redirectedPath !== window.location.pathname.slice(1)) {
        navigate(`/${redirectedPath}`);
      }
    }
  }, [navigate]);

  return (
    <main>
      <Navbar />
      <HeroComp />
      <Caminos />
      <YTC1 />
      <Bridge />
      <Footer />
    </main>
  );
};

export default App;
