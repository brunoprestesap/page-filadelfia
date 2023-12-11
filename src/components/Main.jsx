import React from "react";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative w-full">

        <div className="w-full h-screen absolute top-0 left-0 bg-black bg-gradient-to-r from-[#33201C] justify-center">

          <div className="flex w-full justify-center md:justify-start">
            <img src={logo} className="w-fit w-36 h-36 rounded-2xl m-5 shadow-md shadow-slate-100" />
          </div>

          <div className="max-w-[850px] m-auto h-96 px-5 w-full absolute bottom-36 md:bottom-24">

            <div className="border-l-4 border-stone-800 p-2">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-100">
                Transforme sua Aparência em um Espetáculo de Estilo! Descubra
                nossos serviços premium
              </h1>
              <h2 className="text-base mt-2 md:mt-5 md:text-xl text-slate-100">
                Fuja de Cortes Desapontadores! Desfrute de um Ambiente
                Acolhedor, Profissionais Especializados e Estilo Personalizado.
                Agende já e Liberte seu Estilo!
              </h2>
            </div>

            <div className="flex justify-center md:justify-start mt-3">
              <a
                href="https://wa.me/5596984332634"
                target="_blank"
                rel="noreferrer"
              >
                <button className="py-5 w-64 bg-yellow-500 text-gray-200">
                  <p className="text-2xl text-[#33201C] font-bold">
                    Agende agora!
                  </p>
                </button>
              </a>
            </div>
          </div>

          <div className="absolute bottom-2 left-24 md:bottom-4 md:left-5 flex flex-col md:flex-row md:mt-5 justify-center md:justify-end items-center">
            <div className="text-center">
              <h2 className="text-sm md:text-lg text-white">
                Área de cobertura
              </h2>
              <h2 className="font-bold text-white">Macapá - AP</h2>
            </div>

            <div className="text-center md:m-3">
              <h2 className="text-sm md:text-lg text-white">
                @barbeariafiladelfia_
              </h2>
              <h2 className="text-sm md:text-lg text-white">(96)98433-2634</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
