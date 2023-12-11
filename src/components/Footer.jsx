import React from "react";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="bg-black bg-gradient-to-r from-[#33201C] p-5 md:p-12 w-full grid grid-cols-1 lg:grid-cols-3">
        <div className="lg:mx-8">
          <div className="border-slate-300 border-l-2">
            <h2 className="text-white ml-5 text-4xl font-bold">
              Pronto para sua nova experiência em barbearia?
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <a
              href="https://wa.me/5596981285542"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-5 bg-orange-600 w-full my-5">
                <h2 className="text-2xl text-white">Solicite uma cotação</h2>
              </button>
            </a>
          </div>
        </div>

        <div className="w-full lg:mx-8">
          <div className="w-full mb-5">
            <h2 className="text-white text-2xl font-bold">Contate-nos</h2>
          </div>
          <div className="w-full">
            <h2 className="text-white text-xl">
              contato@filadelfiabarbearia.com.br
            </h2>
            <h2 className="text-white text-xl my-3">+55(96)98433-2634</h2>
            <h2 className="text-white text-xl">
                Av. Alagoas, 561 - Pacoval, Macapá - AP, 68908-300
            </h2>
            <div className="flex items-center gap-3 my-5">
              <a
                href="https://www.instagram.com/barbeariafiladelfia_"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={40} color="#ffffff" />
                <h2 className="text-2xl text-white font-bold">
                  barbeariafiladelfia_
                </h2>
              </a>
            </div>
          </div>
        </div>

        <div className="my-5 lg:mx-8 lg:my-0">
          <h2 className="text-white text-lg mb-3">Home</h2>
          <h2 className="text-white text-lg mb-3">Diferenciais</h2>
          <h2 className="text-white text-lg mb-3">Contato</h2>
          <h2 className="text-white text-lg mb-3">Solicite uma cotação</h2>
        </div>
      </div>
      <div className="bg-[#1A1A1A] p-5 w-full flex flex-col justify-center items-center">
        {/* <img src={logo} alt="logo rodapé" className="w-24" /> */}
        <h2 className="text-sm text-white my-5 text-center">
          Copyright © 2023 by Bruno Prestes.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
