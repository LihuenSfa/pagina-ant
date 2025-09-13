import imgUno from "../assets/bridge-uno.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Bridge = () => {
    useGSAP(() => {
        gsap.fromTo('.alpha', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.alpha',
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

  return (
        <section className="w-full bg-[#fae846] overflow-hidden flex items-center px-8 py-4 md:py-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:flex-row gap-8 lg:justify-center">
                <div className="alpha sm:w-[80%] md:w-[70%] lg:w-[50%] grow">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-2/5 font-helvetica grow flex flex-col justify-between gap-4 text-black">
                    <div className="text-lg gap-2 flex flex-col">
                        <h1 className="alpha text-5xl lg:text-4xl xl:text-5xl">
                            The I Love you Bridge
                        </h1>
                        <div className="fade flex justify-center gap-4 text-[10px] min-[448px]:text-sm xl:text-md md:justify-start text-zinc font-nb font-bold">
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">Año: 2022</p>  
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">Duración: 6min</p>
                            <p className="border-2 border-solid border-black rounded-3xl px-1 min-[370px]:px-2">País: Ucrania</p>
                        </div>
                        <h4 className="alpha text-zinc hidden xl:contents">
                            Luego de que una pareja de adictos a la heroína sea testigo del suicidio de su amigo, discuten de quién es la culpa.
                            Este cortometraje está inspirado en el icónico puente "The I Love You Bridge", conocido por su historia cargada de amor, pérdida y expresión urbana. La pieza toma como punto de partida ese gesto íntimo convertido en símbolo público, para explorar emociones similares en un contexto local.
                            Se planea desarrollar una película en el futuro producida bajo el sello de Yellow Tapes.
                        </h4>
                        <h4 className="alpha text-zinc contents xl:hidden">
                            Luego de que una pareja de adictos a la heroína sea testigo del suicidio de su amigo, discuten de quién es la culpa.
                            Este cortometraje está inspirado en el icónico puente "The I Love You Bridge", conocido por su historia cargada de amor, pérdida y expresión urbana.
                        </h4>
                    </div>
                    <div className="self-center lg:self-start w-32 border-2 border-solid border-black text-center rounded-3xl hover:border-black text-[#fae846] hover:text-black bg-black hover:bg-[#fae846]">
                        <Link className="alpha" to="/ReproductorLove">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Bridge