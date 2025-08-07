import imgCam from "../assets/Graffiti-2.jpg";

const SeccionContacto = () => {
    return (
        <section className="w-screen h-full overflow-hidden bg-zinc pt-20 flex flex-col justify-center items-center mb-24">
            <div className="flex flex-col-reverse md:flex-row justify-center items-start lg:items-start md:items-center">
                <div className=" md:w-3/5 text-end p-[1rem]">
                    <div className="rounded self-start">
                        <img src={imgCam} alt="" className="object-contain rounded-3xl"/>
                    </div>
                    
                </div>
                <div className="p-[1.5rem] w-full md:w-2/5 text-white">
                    <h1 className="text-3xl text-center font-helvetica">Déjanos un mensaje</h1>
                    <form action="https://formsubmit.co/Anthony@yellowtapes.com" method="POST" target="_blank">
                        <div className="flex flex-col gap-4 xl:flex-row justify-start xl:gap-4 py-4">
                            <div className="border-2 border-yellow bg-zinc rounded ">
                                <input type="text" name="name" required placeholder="Nombre completo" className="bg-zinc p-[1rem]"/>
                            </div>
                            <div className="border-2 border-yellow bg-none rounded">
                                <input type="email" name="email" required placeholder="Email" className="bg-zinc p-[1rem] w-full"/>
                            </div>
                        </div>
                        <div className="pb-4 ">
                            <textarea name="message" required placeholder="Tu mensaje" className="bg-zinc p-[1rem] border-2 border-yellow rounded w-[100%] h-[100%]"></textarea>
                        </div>
                        <button type="submit" value="send" className="w-full xl:w-auto bg-yellow border-2 border-yellow text-zinc rounded-3xl px-[1.5rem] py-[0.7rem] font-bold hover:bg-zinc hover:text-yellow">ENVIAR</button>
                    </form>
                    <div className="border-t-2 p-4 mt-4 cursor-text select-text hidden lg:block">
                        <p>Gerente general: Anthony Tymchuk</p>
                        <p>Email: Anthony@yellowtapes.com</p>
                        <p >Número telefónico: +51 945 298 882</p>
                    </div>
                </div>
            </div>

            <div className="border-t-2 w-full text-center p-4 cursor-text select-text block lg:hidden">
                <p>Gerente general: Anthony Tymchuk</p>
                <p>Email: Anthony@yellowtapes.com</p>
                <p >Número telefónico: +51 945 298 882</p>
            </div>
        </section>
    )
}
export default SeccionContacto