import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";

interface BookingFormData {
  fullName: string;
  identification: string;
  phone: string;
  email: string;
}

const StepIndicator = ({
  step,
  label,
  active,
}: {
  step: number;
  label: string;
  active: boolean;
}) => (
  <div className="flex flex-col items-stretch text-xs text-center">
    <div
      className={`border self-center w-[27px] leading-none px-[11px] py-2 rounded-[50%] ${
        active
          ? "text-white border-white"
          : "text-[rgba(13,64,87,1)] border-[rgba(13,64,87,1)]"
      }`}
    >
      {step}
    </div>
    <div className="leading-3 mt-2 whitespace-normal">{label}</div>
  </div>
);

const Booking = () => {
  const [currentStep] = useState(1);
  const { register } = useForm<BookingFormData>();

  return (
    <section className="bg-[rgba(35,164,222,1)] flex flex-col items-center justify-center px-20 py-[70px] max-md:px-5">
      <div className="flex w-full max-w-[942px] flex-col items-stretch">
        <div className="gap-5 flex max-md:flex-col">
          <div className="w-[58%] max-md:w-full">
            <div className="flex flex-col">
              <h2 className="text-[rgba(249,249,249,1)] text-[42px] font-bold leading-[50px]">
                Agenda tu
                <br />
                primer servicio
              </h2>
              <p className="text-white text-base font-normal mt-10">
                Completa la siguiente información para agendar tu primer
                servicio con <span className="font-bold">PIXO spa</span>.
              </p>
            </div>
          </div>
          <div className="w-[42%] max-md:w-full">
            <div className="flex flex-col">
              <div className="flex justify-between mb-10">
                <StepIndicator
                  step={1}
                  label="Información básica"
                  active={currentStep === 1}
                />
                <StepIndicator
                  step={2}
                  label="Selección de servicios"
                  active={currentStep === 2}
                />
                <StepIndicator
                  step={3}
                  label="Datos de ubicación"
                  active={currentStep === 3}
                />
              </div>
              <form className="space-y-[30px]">
                <input
                  {...register("fullName")}
                  placeholder="Nombre completo"
                  className="w-full border border-white bg-transparent text-white px-5 py-3 rounded-[5px] placeholder-white"
                />
                <input
                  {...register("identification")}
                  placeholder="Número de identificación"
                  className="w-full border border-white bg-transparent text-white px-5 py-3 rounded-[5px] placeholder-white"
                />
                <input
                  {...register("phone")}
                  placeholder="Número de celular"
                  className="w-full border border-white bg-transparent text-white px-5 py-3 rounded-[5px] placeholder-white"
                />
                <input
                  {...register("email")}
                  placeholder="Correo electrónico"
                  className="w-full border border-white bg-transparent text-white px-5 py-3 rounded-[5px] placeholder-white"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="text-xs text-white mt-6 max-w-[414px]">
          <ul className="list-disc pl-4 space-y-2">
            <li>
              Sí ya has utilizado <span className="font-bold">PIXO spa</span>{" "}
              anteriormente, deberás iniciar sesión para agendar tu servicio.
            </li>
            <li>
              <span className="font-bold">PIXO spa</span> utilizará la
              información básica registrada para crear una cuenta de usuario a
              tu nombre para próximos servicios.
            </li>
          </ul>
        </div>
        <Button variant="secondary" className="mt-[30px] self-start">
          Siguiente paso
        </Button>
      </div>
    </section>
  );
};

export default Booking;
