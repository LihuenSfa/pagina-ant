import imgUno from "../assets/caminos-uno.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Caminos = () => {

    useGSAP(() => {
        gsap.fromTo('.fade', {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
            trigger: '.fade',
            end: 'bottom bottom',
            scrub: true,
            },
        })
    })

    return (
        <section className="w-full bg-[#fae846] overflow-hidden flex items-center px-8 py-16">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-start lg:flex-row gap-8 lg:justify-center">
                <div className="fade sm:w-[80%] md:w-[70%] lg:w-[50%] grow">
                    <img src={imgUno} alt="Escena todos mis caminos" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-2/5 font-helvetica grow flex flex-col justify-between gap-4 text-black">
                    <div className="text-lg gap-2 flex flex-col">
                        <h1 className="alpha text-5xl lg:text-4xl xl:text-5xl">
                            Todos mis caminos son la destrucción
                        </h1>
                        <div className="fade text-sm xl:text-lg font-bold flex flex-row justify-center lg:justify-start gap-4 xl:flex-col xl:gap-0 text-zinc">
                            <p>Año: 2024</p>  
                            <p>Duración: 20min</p>
                            <p>País: Perú, Lima</p>
                        </div>
                        <h4 className="fade text-zinc hidden xl:contents">
                            Anthony (22), un joven atrapado en los recuerdos con una chica, busca un escape consumiendo drogas y yendo a raves en el centro de Lima. 
                            En una de sus salidas nocturnas conoce a KDS (22), un personaje urbano que sobrevive en la calle. Juntos deambulan por la ciudad, construyendo una amistad hablando de grafitis, fumando y hasta robando una tienda. 
                            Entre estas experiencias, sus conversaciones los llevan a compartir sus conflictos románticos y a reflexionar sobre ellos. 
                            Con sus palabras y vivencias, KDS le hace ver a Anthony que, a pesar de los problemas, la vida sigue y que al final, todo es parte del camino.
                        </h4>
                        <h4 className="fade text-zinc contents xl:hidden">
                            Anthony (22), un joven atrapado en los recuerdos con una chica, busca un escape consumiendo drogas y yendo a raves en el centro de Lima. 
                            En una de sus salidas nocturnas conoce a KDS (22), un personaje urbano que sobrevive en la calle.
                            Con sus palabras y vivencias, KDS le hace ver a Anthony que, a pesar de los problemas, la vida sigue y que al final, todo es parte del camino.
                        </h4>
                    </div>
                    <div className="self-center lg:self-start w-32 border-2 border-solid border-black text-center rounded-3xl hover:border-black text-[#fae846] hover:text-black bg-black hover:bg-[#fae846]">
                        <Link className="fade" to="/ReproductorCaminos">
                            <p className="text-lg">
                                Mirar Teaser
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Caminos;
