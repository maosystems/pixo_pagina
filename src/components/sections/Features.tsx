const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col">
    <div className="flex items-stretch gap-4">
      <img
        src={icon}
        className="aspect-[1.02] object-contain w-[41px]"
        alt={title}
      />
      <h3 className="text-xl font-bold text-[rgba(42,42,42,1)] my-auto">
        {title}
      </h3>
    </div>
    <p className="text-base font-normal text-[rgba(42,42,42,1)] mt-[7px]">
      {description}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className="self-center w-full max-w-[1014px] px-4 py-10">
      <h2 className="text-[rgba(42,42,42,1)] text-[42px] font-bold leading-[50px] text-center">
        Conoce <br />
        <span className="text-[rgba(51,222,179,1)]">nuestra APP</span>
      </h2>
      <p className="text-[rgba(42,42,42,1)] text-base font-normal text-center max-w-[510px] mx-auto mt-10">
        Conoce todo lo que{" "}
        <span className="font-bold text-[rgba(35,164,222,1)]">PIXO spa</span>{" "}
        tiene para ofrecer y haz de tu experiencia una cita inolvidable.
      </p>
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 mt-10 max-md:grid-cols-1">
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/091a4624ba8c17e0240fb9e712fab5c900bee2ee5f02f4d08b4bd53c21f7506e?placeholderIfAbsent=true"
          title="Profesionales calificados"
          description="Tendrás profesionales certificados, lo que permite ofrecer un servicio confiable."
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/fe7971993792508557d04fbb1b233565343434f0ff7d13c76827e9c2b5c55f55?placeholderIfAbsent=true"
          title="Privacidad en tu información"
          description="Los estilistas no tendrán acceso a tu información privada (métodos de contácto)."
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/f7077aa3dce6b94318209a18b2f2c48fbe49326ab5b13999985001d110f9beac?placeholderIfAbsent=true"
          title="Pagos al finalizar"
          description="En PIXO spa te ofrecemos la opción de pagar al finalizar el servicio para que tengas mayor confianza."
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/0e2b718f10e9a0d6dc5b367708c51ad936b5c4d0d9f3193069d13e53e81e6b8d?placeholderIfAbsent=true"
          title="Seguimiento activo"
          description="El equipo de PIXO spa hará seguimiento de tu reserva para evitar cualquier inconveniente."
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/7c08d8a98df4297c858ff27ca8ea53ed9a55bca4de1408559df3b56032c71f88?placeholderIfAbsent=true"
          title="Soporte efectivo"
          description="En caso de algún inconveniente, el equipo de PIXO spa estará dispuesto a apoyarte en cualquier solicitud."
        />
        <FeatureCard
          icon="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/d62cab77b0830fc314561efc4ec79011835751f9fdcc4a57d27c0a3823ba053e?placeholderIfAbsent=true"
          title="Seguridad en los pagos"
          description="En PIXO spa trabajamos con payvalida lo que nos permite ofrecer mayor seguridad en el manejo de tus pagos."
        />
      </div>
    </section>
  );
};

export default Features;
