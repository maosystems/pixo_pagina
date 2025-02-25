import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[rgba(42,42,42,1)] flex flex-col items-center justify-center p-[70px] max-md:px-5">
        <div className="w-full max-w-[970px] grid grid-cols-3 gap-5 max-md:grid-cols-1">
          <div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/f00e36ae8f78e9365a5e4d139e24aba9d099cfcd63c30d57ee930120af7a323a?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[3.07] object-contain w-[138px]"
            />
            <p className="text-white text-base font-normal mt-10">
              <span className="font-bold text-[rgba(51,222,179,1)]">
                PIXO spa
              </span>{" "}
              es la aplicación que te ayuda a encontrar el look perfecto para
              cualquier ocasión. Con nuestra amplia selección de estilistas y
              servicios, podrás verte y sentirte mejor que nunca.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/f88a96e3c9b1125de6de0a4dfaee9fd11f62982b7950f3aa87f429b893a3ed2e?placeholderIfAbsent=true"
              alt="Rating"
              className="aspect-[5.26] object-contain w-[126px] mt-6"
            />
            <div className="flex gap-[15px] mt-9">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/1ed60dc50ed5705681f711c0dca028b6b3b4cb394688c7c17a5e8fbf660b1ede?placeholderIfAbsent=true"
                alt="App Store"
                className="aspect-[3.45] object-contain w-[138px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/2d532f68fefaecedab54ce0c94e759ae1351332b342ad343574b74c734d2b505?placeholderIfAbsent=true"
                alt="Play Store"
                className="aspect-[3.45] object-contain w-[138px]"
              />
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-bold">Contáctanos</h3>
            <p className="mt-3">
              Podrás comunicarte con nosotros mediante los siguientes canales y
              en siguiente horario:
            </p>
            <div className="mt-3">
              <p>Lunes a viernes de 8:00 a.m. hasta 5:00 p.m.</p>
              <ul className="mt-2">
                <li>Edificio XXXX Oficina 305</li>
                <li className="font-bold">contacto@pixocolombia.com</li>
                <li>Tel: 321 000 5555</li>
              </ul>
            </div>
            <Button
              variant="outline"
              className="mt-6 border-[rgba(51,222,179,1)] text-[rgba(51,222,179,1)]"
            >
              Escribir al WhatsApp
            </Button>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-bold">Mapa del sitio</h3>
            <nav className="mt-3 space-y-2">
              <a href="/" className="block hover:text-[rgba(51,222,179,1)]">
                Inicio
              </a>
              <a href="/app" className="block hover:text-[rgba(51,222,179,1)]">
                Nuestra APP
              </a>
              <a
                href="/book"
                className="block text-[rgba(51,222,179,1)] font-bold"
              >
                Agendar tu primer servicio
              </a>
              <a href="/faq" className="block hover:text-[rgba(51,222,179,1)]">
                Preguntas frecuentes
              </a>
              <a
                href="/terms"
                className="block hover:text-[rgba(51,222,179,1)]"
              >
                Terminos y condiciones
              </a>
              <a
                href="/privacy"
                className="block hover:text-[rgba(51,222,179,1)]"
              >
                Politica de privacidad
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(51,222,179,1)] flex flex-col items-center justify-center px-[70px] py-5 max-md:px-5">
        <div className="flex w-full max-w-[1014px] items-center justify-between gap-5 flex-wrap">
          <p className="text-black">
            Diseñado y Desarrollado por{" "}
            <span className="font-bold">PIXO S.A.S.</span>
          </p>
          <div className="flex gap-5">
            <Button variant="outline">Politica de privacidad</Button>
            <Button variant="outline">Terminos y condiciones</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
