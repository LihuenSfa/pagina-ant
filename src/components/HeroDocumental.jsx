import Video from "../assets/graffity.mp4";

const HeroDocumental = () => {
  return (
    <section className="w-screen h-screen overflow-hidden px-8 sm:px-32 md:px-16 lg:px-0 flex flex-col-reverse md:flex-row justify-center items-center gap-8 bg-zinc">
      <div className="md:w-3/5">
        <video controls>
          <source src={Video} type="video/mp4"/>
        </video>
      </div>
      <div>
        <div className="font-helvetica text-center md:text-start">
          <h4 className="text-lg font-bold">
            Graffiti Tapes - Lima
          </h4>
          <h4 className="text-md">
            Año de producción: 2025
          </h4>
        </div>
      </div>
    </section>
  )
}

export default HeroDocumental