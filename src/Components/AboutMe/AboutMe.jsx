import { Envelope, PaperPlaneTilt } from "phosphor-react";
import React from "react";
import { profile } from "../../helper/images";
import ScrollRevealSection from "../RevealSections/revealSections";

export function AboutMe() {
  let email = "mailto:gersonlamela7@gmail.com";
  function calculateAge(birthDate) {
    var today = new Date();
    var birthDate = new Date(birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Check if the current month is before the birth month or if it's the birth month but the current day is before the birth day
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }

  var birthDate = "2001-12-2"
  var age = calculateAge(birthDate);

 ;

  return (
      
      <div className="w-full h-screen bg-graylight dark:bg-dark200 flex items-center ">
         
        <div className="w-full h-screen mx-auto px-2 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center  justify-start sm:justify-center py-4 gap-10">
          <div className="w-[150px] h-[150px] sm:w-[367px] sm:h-[367px] bg-dark200 border-l-4 border-dark dark:border-blue">
            <img
              src={profile}
              className="w-[150px] h-[150px] sm:w-[367px] sm:h-[367px] text-blue text-3xl  font-bold flex items-center justify-center"
              alt="Foto do Gerson Lamela"
              srcSet=""
            />
          </div>
          <div className="flex flex-col justify-between h-[367px] ">
            <h1 className="text-2xl text-dark dark:text-light font-semibold flex flex-col">
              SOBRE MIM
              <span className="text-sm mt-5">Porto,Portugal</span>
            </h1>

            <p className="w-[300px] lg:w-[565px] mb-5 lg:mb-0 font-light text-justify sm:text-sm md:text-md lg:text-lg text-dark dark:text-graylight">
              Sou o <span className="font-bold">Gerson Lamela</span> tenho
              <span> {age}</span> anos, estudei no
              IPTA (Instituto Profissional de Tecnologias Avançadas),no curso de
              Multimédia , tenho como objetivos concluir universidade
              (Engenharia Multimédia) e entrar em contacto na área da
              programação com um meio mais profissional. Desde muito novo que me
              interessei por saber como é que tudo era feito e foi esse
              interesse que me fez querer seguir a área de programação e saber
              como é que um simples site é feito.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://gersonlamela-curriculum.vercel.app/"
                target="_blank"
              >
                <button className="btn PurpleToBlue before:bg-graylight">
                  <PaperPlaneTilt className="icon" />
                  Currículo
                </button>
              </a>
              <button className="btn PinkToPurlple before:bg-graylight">
                <Envelope className="icon" />
                <a href={email}>E-mail</a>
              </button>
            </div>
          </div>
        </div>
      </div>

  );
}
