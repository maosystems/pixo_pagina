
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header>
      <div className="bg-[rgba(51,222,179,1)] flex flex-col text-base text-center justify-center px-[70px] py-3 max-md:px-5">
        <div className="flex w-[265px] max-w-full items-stretch gap-4">
          <Link to="/book">
            <Button variant="primary">Soy cliente</Button>
          </Link>
          <Link to="/stylist">
            <Button variant="outline">Soy estilista</Button>
          </Link>
        </div>
      </div>
      <nav className="self-center flex w-full max-w-[1014px] items-stretch gap-5 text-base text-black font-normal flex-wrap justify-between px-4 py-3">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/dc417ab24fee9307c0ef7139dfe11012c7ba75a68b63b2ee4ec2bdcc1d5fc67c?placeholderIfAbsent=true"
            className="aspect-[3.07] object-contain w-[138px]"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center gap-5 flex-wrap my-auto">
          <Link to="/" className="hover:text-[rgba(51,222,179,1)]">
            Inicio
          </Link>
          <Link to="/app" className="hover:text-[rgba(51,222,179,1)]">
            Nuestra APP
          </Link>
          <Link to="/book" className="text-[rgba(51,222,179,1)] font-bold">
            Agendar servicio
          </Link>
          <Link to="/faq" className="hover:text-[rgba(51,222,179,1)]">
            Preguntas frecuentes
          </Link>
          <Link to="/login">
            <Button
              variant="outline"
              className="border-[rgba(35,164,222,1)] text-[rgba(35,164,222,1)]"
            >
              Iniciar sesión
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
