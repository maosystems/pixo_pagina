
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const Stylist = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="self-center flex w-full max-w-[1014px] flex-col items-stretch mt-[15px] px-4">
          <div className="w-full max-w-[975px] mt-10">
            <div className="gap-10 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[55%] max-md:w-full">
                <div className="flex flex-col text-base text-[rgba(42,42,42,1)] font-normal">
                  <h1 className="text-[46px] font-bold leading-[55px] max-md:text-[40px] max-md:leading-[54px]">
                    Conviértete en <br />
                    <span className="text-[rgba(35,164,222,1)]">estilista PIXO</span>
                  </h1>
                  <p className="mt-10 text-lg">
                    Como estilista de{" "}
                    <span className="font-bold text-[rgba(51,222,179,1)]">
                      PIXO spa
                    </span>
                    , tendrás la oportunidad de conectar con nuevos clientes y hacer crecer tu negocio.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-10">
                    <div className="bg-[rgba(51,222,179,0.1)] p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2 text-[rgba(51,222,179,1)]">
                        Clientes verificados
                      </h3>
                      <p>Accede a una red de clientes verificados y confiables.</p>
                    </div>
                    <div className="bg-[rgba(35,164,222,0.1)] p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2 text-[rgba(35,164,222,1)]">
                        Pagos seguros
                      </h3>
                      <p>Recibe tus pagos de forma segura y puntual.</p>
                    </div>
                    <div className="bg-[rgba(35,164,222,0.1)] p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2 text-[rgba(35,164,222,1)]">
                        Flexibilidad
                      </h3>
                      <p>Maneja tu agenda y servicios como mejor te convenga.</p>
                    </div>
                    <div className="bg-[rgba(51,222,179,0.1)] p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2 text-[rgba(51,222,179,1)]">
                        Soporte 24/7
                      </h3>
                      <p>Cuenta con nuestro apoyo en todo momento.</p>
                    </div>
                  </div>
                  <Button variant="primary" className="mt-10">
                    Registrarme como estilista
                  </Button>
                </div>
              </div>
              <div className="w-[45%] max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/aa39c0274c33bfa6109d75dead40e477047b73c924d2f99970ecc805318c711f?placeholderIfAbsent=true"
                  alt="Estilista"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(35,164,222,1)] mt-20 py-20 px-4">
          <div className="max-w-[1014px] mx-auto">
            <h2 className="text-white text-4xl font-bold text-center mb-10">
              ¿Por qué unirte a <span className="text-[rgba(51,222,179,1)]">PIXO spa</span>?
            </h2>
            <div className="grid grid-cols-3 gap-8 max-md:grid-cols-1">
              <div className="bg-white p-6 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/091a4624ba8c17e0240fb9e712fab5c900bee2ee5f02f4d08b4bd53c21f7506e?placeholderIfAbsent=true"
                  alt="Más clientes"
                  className="w-12 h-12 mb-4"
                />
                <h3 className="font-bold text-xl mb-2 text-[rgba(42,42,42,1)]">
                  Más clientes
                </h3>
                <p className="text-[rgba(42,42,42,1)]">
                  Accede a una amplia red de clientes potenciales en tu área.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/fe7971993792508557d04fbb1b233565343434f0ff7d13c76827e9c2b5c55f55?placeholderIfAbsent=true"
                  alt="Gestión simple"
                  className="w-12 h-12 mb-4"
                />
                <h3 className="font-bold text-xl mb-2 text-[rgba(42,42,42,1)]">
                  Gestión simple
                </h3>
                <p className="text-[rgba(42,42,42,1)]">
                  Administra tus citas y servicios desde una sola plataforma.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/f7077aa3dce6b94318209a18b2f2c48fbe49326ab5b13999985001d110f9beac?placeholderIfAbsent=true"
                  alt="Crece tu negocio"
                  className="w-12 h-12 mb-4"
                />
                <h3 className="font-bold text-xl mb-2 text-[rgba(42,42,42,1)]">
                  Crece tu negocio
                </h3>
                <p className="text-[rgba(42,42,42,1)]">
                  Aumenta tus ingresos y expande tu base de clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stylist;
