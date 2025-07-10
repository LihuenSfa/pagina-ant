import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import iconImg from "../assets/image.svg"
import { useEffect, useState } from "react"

const Navbar = () => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("info@yellowtapes.com")
        alert("Email copiado")
    }

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
    <header className="w-screen px-4 sm:px-8 flex justify-between items-center">
        <nav className={`fixed top-0 left-0 w-screen z-20 ${isScrolled ? 'bg-zinc' : 'bg-transparent'} transition duration-300`}>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={iconImg} alt="Y T logo" className="h-10 w-auto fill-current"/>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-4 text-xl font-helvetica text-center ml-16">
                        <Link to="/Nosotros">
                            <p className="text-white hover:text-gray font-helvetica hover:underline">
                                Nosotros
                            </p>
                        </Link>
                        <Link to="/Alquiler">
                            <p className="text-white hover:text-gray font-helvetica hover:underline">
                                Alquiler
                            </p>
                        </Link>
                        <p className={`font-ducktape text-2xl text-yellow-10 font-bold ${isScrolled ? 'visible': 'hidden'} transition duration-500`}>Yellow Tapes</p>
                        <Link to="/Proyectos">
                            <p className="text-white hover:text-gray font-helvetica hover:underline">
                                Proyectos
                            </p>
                        </Link><Link to="/Contacto">
                            <p className="text-white hover:text-gray font-helvetica hover:underline">
                                Contacto
                            </p>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        {/* <FontAwesomeIcon icon={ faEnvelope } onClick={() => copyToClipboard()} className="hover:text-gray"/> */}
                        
                        <Link to= "https://www.instagram.com/yellow_tapes_/" target="_blank">
                            <FontAwesomeIcon icon={ faInstagram } className="hover:text-gray h-[1.5rem]"/>
                        </Link>
                        <Link to="https://www.youtube.com/@YellowTapes_YT" target="_blank">
                            <FontAwesomeIcon icon={ faYoutube } className="hover:text-gray h-[1.5rem]"/>
                        </Link>
                        <Link to="https://www.tiktok.com/@yellow.tapes" target="_blank">
                            <FontAwesomeIcon icon={ faTiktok } className="hover:text-gray h-[1.5rem]"/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar