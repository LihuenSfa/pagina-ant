import HeroComp from "./components/HeroComp";
import Navbar from "./components/Navbar";
import Caminos from "./components/Caminos";
import Bridge from "./components/Bridge";
import YTC1 from "./components/YTC1";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const pathFrom404 = window.location.search.slice(1);
    if (pathFrom404) {
      navigate(pathFrom404);
    }
  }, []);

  return (
    <main>
      <Navbar/>
      <HeroComp/>
      <Caminos/>
      <YTC1/>
      <Bridge/>
      <Footer/>
    </main>
  )
}

export default App
