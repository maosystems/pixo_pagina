import { useState } from "react";
import Button from "../ui/Button";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: FAQItem & { isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={onClick}
    >
      <span className="text-base font-bold text-[rgba(42,42,42,1)]">
        {question}
      </span>
      <img
        src={
          isOpen
            ? "https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/5aaa5ba7d6250e8e51f521c655132bd1faa57913d1eab201398f4264df3ffca1?placeholderIfAbsent=true"
            : "https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/c229cd7cadfe4e9056ed3007de3b8648dd0250aa2ed9c774cdf74ead66f1ba8e?placeholderIfAbsent=true"
        }
        className="aspect-[0.92] object-contain w-[22px]"
        alt={isOpen ? "Close" : "Open"}
      />
    </button>
    {isOpen && (
      <p className="text-[rgba(106,106,106,1)] text-sm font-normal mt-[11px]">
        {answer}
      </p>
    )}
  </div>
);

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "¿Cómo puedo registrarme?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor dui sollicitudin enim lacinia venenatis. Proin vulputate facilisis purus at pharetra.",
    },
    {
      question: "¿Cómo puedo reservar servicios?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "¿Cómo puedo pagar?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "¿Cómo puedo cancelar una cita?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "¿Cómo puedo contactar a PIXO spa?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="self-center w-full max-w-[1015px] mt-[70px] px-4 max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col">
        <div className="w-[42%] max-md:w-full">
          <div className="flex flex-col">
            <h2 className="text-[42px] font-bold leading-[50px] text-[rgba(42,42,42,1)]">
              ¿Tienes alguna
              <br />
              <span className="text-[rgba(51,222,179,1)]">pregunta</span>?
            </h2>
            <p className="font-normal mt-10">
              ¿Tienes alguna duda sobre{" "}
              <span className="font-bold text-[rgba(35,164,222,1)]">
                PIXO spa
              </span>
              ? , a continuación encontrarás algunas de las preguntas más
              frecuentes que podrías tener.
            </p>
            <Button variant="primary" className="mt-10">
              Registrarme como cliente
            </Button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/5e76347595964073ab18aa79b2abcc53/5d69837988a1316b37adcec4f8ca32dfcace5e046a00f331a3033cdc043f9d40?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[3.07] w-[175px] mt-[45px]"
            />
          </div>
        </div>
        <div className="w-[58%] max-md:w-full">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                {...faq}
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
