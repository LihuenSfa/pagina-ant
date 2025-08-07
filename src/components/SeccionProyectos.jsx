import { Link } from "react-router-dom";
import imgPH from "../assets/nosotros-uno.jpg"

const SeccionProyectos = () =>{

  return (
    <section className="h-full w-screen overflow-hidden bg-zinc common-padding">
      <div className="w-[100%] h-[100%] text-white gap-10">
        <div className='card__container flex-wrap'>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
            <article className="card__article">
              <img src={imgPH} alt="Imagen representando un frame de un proyecto" className="card__img"/>
              <div className="card__data">
                <span className="card__desc">Producción: 2020</span>
                <h2 className="card__title">Conociendo Ucrania</h2>
                <Link></Link>
              </div>
            </article>
          </div>
          {/* 
          <div className="h-[10rem] w-[20rem] border-2 border-white p-4 rounded flex flex-col justify-end hover:h-[12rem] hover:w-[22rem]">
            <h2 className="font-bold text-2xl">Conociendo Ucrania</h2>
            <p>Producción: 2020</p>
          </div>
          */}
      </div>
    </section>
  );
}
export default SeccionProyectos