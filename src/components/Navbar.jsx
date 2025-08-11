import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import iconImg from "../assets/image.svg"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // constantes para manejar la burger
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


  return (
     <header className="w-screen fixed top-0 left-0 z-20">
      <nav className={`w-full transition duration-300 bg-zinc md:${isScrolled ? 'bg-zinc' : 'bg-transparent'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <img src={iconImg} alt="Y T logo" className="h-8 md:h-10 w-auto" />
            </Link>

            <div className="hidden md:flex justify-center items-center gap-4 text-sm md:text-lg lg:text-xl font-helvetica">
              <Link to="/Nosotros" className="text-white hover:text-gray hover:underline">Nosotros</Link>
              <Link to="/Alquiler" className="text-white hover:text-gray hover:underline">Alquiler</Link>
              <p className={`font-ducktape lg:text-2xl text-yellow-10 font-bold ${isScrolled ? 'visible' : 'hidden'} transition duration-500`}>Yellow Tapes</p>
              <Link to="/Proyectos" className="text-white hover:text-gray hover:underline">Proyectos</Link>
              <Link to="/Contacto" className="text-white hover:text-gray hover:underline">Contacto</Link>
            </div>

            <div className="hidden md:flex gap-4">
              <Link to="https://www.instagram.com/yellow_tapes_/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-gray md:h-[1.5rem]" />
              </Link>
              <Link to="https://www.youtube.com/@YellowTapes_YT" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="hover:text-gray md:h-[1.5rem]" />
              </Link>
              <Link to="https://www.tiktok.com/@yellow.tapes" target="_blank">
                <FontAwesomeIcon icon={faTiktok} className="hover:text-gray md:h-[1.5rem]" />
              </Link>
            </div>

            <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-zinc-900 px-4 pb-4 space-y-4">
            <Link to="/Nosotros" className="block text-white hover:text-gray">Nosotros</Link>
            <Link to="/Alquiler" className="block text-white hover:text-gray">Alquiler</Link>
            <Link to="/Proyectos" className="block text-white hover:text-gray">Proyectos</Link>
            <Link to="/Contacto" className="block text-white hover:text-gray">Contacto</Link>

            <div className="flex gap-4 mt-4">
              <Link to="https://www.instagram.com/yellow_tapes_/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-gray" />
              </Link>
              <Link to="https://www.youtube.com/@YellowTapes_YT" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="hover:text-gray" />
              </Link>
              <Link to="https://www.tiktok.com/@yellow.tapes" target="_blank">
                <FontAwesomeIcon icon={faTiktok} className="hover:text-gray" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar