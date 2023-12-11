import React from "react";
import { SiStylelint } from "react-icons/si";
import {
  MdWorkspacePremium,
  MdHighQuality,
  MdSentimentVerySatisfied,
} from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import DiferencialItem from "./DiferencialItem";

const Diferenciais = () => {
  const diferenciais = [
    {
      id: 1,
      icon: <SiStylelint />,
      title: "Estilo Personalizado",
      desc: "Nossa equipe especializada entende que seu estilo é único. Oferecemos cortes de cabelo e designs de barba que refletem sua personalidade e mantêm você na vanguarda das tendências.",
    },
    {
      id: 2,
      icon: <MdWorkspacePremium />,
      title: "Atendimento Premium",
      desc: "Valorizamos sua confiança em nossos profissionais. Cada barbeiro é treinado não apenas para cortar cabelo e aparar barbas, mas para ouvir suas preferências e superar suas expectativas.",
    },
    {
      id: 3,
      icon: <MdHighQuality />,
      title: "Produtos de Qualidade",
      desc: "Utilizamos apenas produtos de primeira linha, recomendando e fornecendo o melhor para a manutenção da sua aparência entre as visitas.",
    },
    {
      id: 4,
      icon: <FaCalendarCheck />,
      title: "Agendamento Simplificado",
      desc: "Seu tempo é valioso. Com nosso sistema de agendamento online intuitivo, marcar seu horário é fácil e rápido, para se adequar à sua agenda movimentada.",
    },
    {
      id: 5,
      icon: <MdSentimentVerySatisfied />,
      title: "Experiência Completa",
      desc: "Mais do que um corte, é um momento para se sentir confiante e renovado. Valorizamos não apenas sua aparência, mas também seu bem-estar e satisfação.",
    },
  ];

  return (
      <>
        <div className="bg-[#33201C] px-5 py-8 grid grid-cols-1 xl:grid-cols-2">
          <div className="w-full xl:px-16">
            <div className="border-l-2 border-stone-100 p-5">
              <h2 className="text-stone-200 font-bold text-4xl md:text-6xl">
                Nossos Diferenciais
              </h2>
            </div>

            <div className="px-5 py-8">
              <h2 className="text-base md:text-lg text-stone-200 landing-7">
                Junte-se a nós e experimente uma jornada onde seu estilo e
                conforto são prioridades.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciais.map((e) => {
              return (
                <DiferencialItem
                  id={e.id}
                  icon={e.icon}
                  title={e.title}
                  desc={e.desc}
                />
              );
            })}
          </div>
        </div>
      </>
  );
};

export default Diferenciais;
