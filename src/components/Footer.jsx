import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="bg-zinc text-gray-300 py-4 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between gap-16">
        <div>
          <h1 className="text-yellow text-lg font-bold">Yellow Tapes Studios</h1>
          <p className="mt-4 text-md">
            Productora de cine y documental underground.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Enlaces rápidos</h2>
          <div className='flex gap-8 items-center pt-4'>
            <Link to="/Nosotros">
              <p className="hover:text-yellow-500">Nosotros</p>
            </Link>
            <Link to="/Alquiler">
              <p className="hover:text-yellow-500">Alquiler</p>
            </Link>
            <Link to="/Proyectos">
              <p className="hover:text-yellow-500">Proyectos</p>
            </Link>
            <Link to="/Contacto">
              <p className="hover:text-yellow-500">Contacto</p>
            </Link>
            <p className='text-yellow-500 cursor-text select-text'>Anthony@yellowtapes.com</p>
          </div>
          
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-100">Sigue nuestro trabajo</h2>
          <div className="mt-4 flex space-x-4">
            <Link to= "https://www.instagram.com/yellow_tapes_/" target="_blank">
              <FontAwesomeIcon icon={ faInstagram } className="hover:text-gray"/>
            </Link>
            <Link to="https://www.youtube.com/@YellowTapes_YT" target="_blank">
              <FontAwesomeIcon icon={ faYoutube } className="hover:text-gray"/>
            </Link>
            <Link to="https://www.tiktok.com/@yellow.tapes" target="_blank">
              <FontAwesomeIcon icon={ faTiktok } className="hover:text-gray"/>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm flex items-center justify-between px-4 pr-8">
        <p>© 2024 Yellow Tapes Studios. Todos los derechos reservados.</p>
        <div className='flex gap-1'>
          <p>Desarrollado por</p>
          <Link to="https://linktr.ee/tealbonfiredevs" target='_blank'>
            <p className='hover:text-yellow-500'>Teal Bonfire</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;