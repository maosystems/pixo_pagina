import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="self-center flex w-full max-w-[1014px] flex-col items-stretch mt-[15px] px-4">
      <div className="w-full max-w-[975px] mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[55%] max-md:w-full">
            <div className="flex flex-col text-base text-[rgba(42,42,42,1)] font-normal">
              <h1 className="text-[46px] font-bold leading-[55px] max-md:text-[40px] max-md:leading-[54px]">
                Conecta con tu
                <br />
                estilista{" "}
                <span className="text-[rgba(35,164,222,1)]">ideal</span>
              </h1>
              <p className="mt-10">
                Encuentra el estilo perfecto con{" "}
                <span className="font-bold text-[rgba(51,222,179,1)]">
                  PIXO spa
                </span>
                .
                <br />
                Agenda tu servicio con los mejores profesionales desde cualquier
                lugar de forma fácil y rápida.
              </p>
              <Button variant="primary" className="mt-14">
                Agendar servicio
              </Button>
              <Button
                variant="outline"
                className="mt-3 border-[rgba(35,164,222,1)] text-[rgba(35,164,222,1)]"
              >
                Registrarme
              </Button>
            </div>
          </div>
          <div className="w-[45%] max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/aa39c0274c33bfa6109d75dead40e477047b73c924d2f99970ecc805318c711f?placeholderIfAbsent=true"
              alt="Hero"
              className="aspect-[0.77] object-contain w-full rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
