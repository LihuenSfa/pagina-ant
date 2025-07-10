import imgUno from "../assets/GraffitiEnglish.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const YTC1 = () => {

    useGSAP(() => {
        gsap.fromTo('.fadein', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.fadein',
            end: 'bottom bottoma',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full bg-zinc overflow-hidden flex items-center px-8 py-16">
            <div className="md:flex gap-10 justify-center">
                <div className="w-2/5 font-helvetica md:flex flex-col items-end justify-between">
                    <div className="text-lg">
                        <h1 className="fadein text-5xl text-yellow-10">
                            Graffiti Tapes - Lima
                        </h1>
                        <div className="fadein text-white pb-4">
                            <p>año: 2025</p>  
                            <p>duración: 1h 10min</p>
                            <p>país: Perú, Lima</p>
                        </div>
                        <h4 className="fadein text-white">
                            Mientras Lima duerme, grafiteros pintan sus calles. Este documental sigue a diferentes personajes dentro de la escena del graffiti ilegal en Lima. Se adentra en sus madrugadas, en sus miedos y en sus impulsos. No busca solo mostrar lo que hacen, sino entender por qué lo hacen. Una mirada cruda y sin filtros al circuito underground donde cada trazo es una declaración, un riesgo, una forma de existir al margen del sistema.
                        </h4>
                    </div>
                    <div className="w-32 border-2 border-solid border-yellow-100 text-center rounded-3xl hover:border-yellow-10 text-yellow-100 hover:text-yellow-10">
                    <Link to="/pagina-ant/ReproductorDocumental">
                        <p className="fadein text-lg">
                            Mirar Teaser
                        </p>
                    </Link>
                    </div>
                </div>
                <div className="fadein w-[50%]">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
  )
}

export default YTC1