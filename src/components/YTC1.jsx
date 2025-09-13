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
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full bg-zinc overflow-hidden flex items-center px-8 py-4 md:py-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:flex-row gap-8 lg:justify-center">
                <div className="fadein sm:w-[80%] md:w-[70%] lg:w-[50%] grow">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-2/5 font-helvetica grow flex flex-col justify-between gap-4">
                    <div className="text-lg gap-2 flex flex-col">
                        <h1 className="fadein text-5xl lg:text-4xl xl:text-5xl text-yellow-10">
                            Graffiti Tapes - Lima
                        </h1>
                        <div className="fade flex justify-center gap-4 text-[10px] min-[448px]:text-sm xl:text-md md:justify-start text-white font-nb font-bold">
                            <p className="border-2 border-solid border-white rounded-3xl px-1 min-[370px]:px-2">Año: 2025</p>  
                            <p className="border-2 border-solid border-white rounded-3xl px-1 min-[370px]:px-2">Duración: 1h 10min</p>
                            <p className="border-2 border-solid border-white rounded-3xl px-1 min-[370px]:px-2">País: Perú, Lima</p>
                        </div>
                        <h4 className="fadein text-white hidden xl:contents">
                            Mientras Lima duerme, grafiteros pintan sus calles. 
                            Este documental sigue a diferentes personajes dentro de la escena del graffiti ilegal en Lima. 
                            Se adentra en sus madrugadas, en sus miedos y en sus impulsos. 
                            No busca solo mostrar lo que hacen, sino entender por qué lo hacen. 
                            Una mirada cruda y sin filtros al circuito underground donde cada trazo es una declaración, un riesgo, una forma de existir al margen del sistema.
                        </h4>
                        <h4 className="fadein text-white contents xl:hidden">
                            Mientras Lima duerme, grafiteros pintan sus calles. 
                            Este documental sigue a diferentes personajes dentro de la escena del graffiti ilegal en Lima. 
                            No busca solo mostrar lo que hacen, sino entender por qué lo hacen. 
                            Una mirada cruda y sin filtros al circuito underground donde cada trazo es una declaración, un riesgo, una forma de existir al margen del sistema.
                        </h4>
                    </div>
                    <div className="self-center lg:self-start w-32 border-2 border-solid border-white text-center rounded-3xl hover:border-yellow text-white hover:text-yellow">
                    <Link to="/ReproductorDocumental">
                        <p className="fadein text-lg">
                            Mirar Teaser
                        </p>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default YTC1