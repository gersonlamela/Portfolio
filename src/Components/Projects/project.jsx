import {
  Atom,
  FileHtml,
  FileJs,
  FileCss,
  FileTs,
  Link,
  GoogleChromeLogo,
  GithubLogo,
} from "phosphor-react";
import {
  Project01,
  Project02,
  Project03,
  Project04,
  Project05,
  Project06,
  Project07,
  Project08,
  Project09,
  Project10,
} from "../../helper/images";
import React from "react";

import { useState } from "react";

export function Projects() {
  let [projects] = useState({
    Projeto1: [
      {
        id: 1,
        titulo: "System POS",
        imagem: Project10,
        tecnologias: [
          <FileTs size={32} />,
          <Atom size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/System-POS-Restaurant",
        linkWeb: "https://system-pos-restaurant.vercel.app",
        resumo:
          "This project was developed as part of my final undergraduate Multimedia Engineering thesis, where I achieved a final grade of 19/20.",
      },
    ],
    Projeto2: [
      {
        id: 2,
        titulo: "Dev Finances",
        imagem: Project02,
        tecnologias: [
          <FileTs size={32} />,
          <Atom size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/dtmoney",
        linkWeb: "https://dtmoney-lac.vercel.app/",
        resumo:
          "O dtmoney é uma aplicação de controlo financeiro com a mesma ideia do dev.finances, mas com tecnologias e recursos mais avançados, utilizando bibliotecas open source desenvolvidas pela comunidade. Foi desenvolvida durante as aulas do Chapter II da trilha de ReactJS do Bootcamp Ignite da Rocketseat e permite registar e excluir transações, além de visualizar o saldo de entradas e saídas 💰.",
      },
    ],
    Projeto3: [
      {
        id: 3,
        titulo: "Podcastr",
        imagem: Project03,
        tecnologias: [
          <FileTs size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/podcastr",
        linkWeb: "",
        resumo:
          "O Podcastr é uma plataforma construída para transmissão de podcasts.",
      },
    ],
    Projeto4: [
      {
        id: 4,
        titulo: "Github Explorer",
        imagem: Project04,
        tecnologias: [
          <FileTs size={32} />,
          <Atom size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/01-github-explorer",
        linkWeb: "",
        resumo:
          "Projeto desenvolvido durante o Ignite da Rocketseat | Trilha ReactJS Chapter I.",
      },
    ],
    Projeto5: [
      {
        id: 5,
        titulo: "Login",
        imagem: Project05,
        tecnologias: [
          <Atom size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/Login",
        linkWeb: "",
        resumo: "Sistema de Login com token JWT.",
      },
    ],
    Projeto6: [
      {
        id: 6,
        titulo: "Tabela de Preços",
        imagem: Project06,
        tecnologias: [
          <Atom size={32} />,
          <FileTs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/BoraCodar-15",
        linkWeb: "https://bora-codar-15.vercel.app/",
        resumo: "Tabela de Preços",
      },
    ],
    Projeto7: [
      {
        id: 7,
        titulo: "Cartão de Crédito",
        imagem: Project07,
        tecnologias: [
          <Atom size={32} />,
          <FileTs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo:
          "https://github.com/gersonlamela/BoraCodar-13-Cartao-de-Credito",
        linkWeb: "https://bora-codar-13-cartao-de-credito.vercel.app/",
        resumo: "Cartão de Crédito",
      },
    ],
    Projeto8: [
      {
        id: 8,
        titulo: "Calculadora",
        imagem: Project08,
        tecnologias: [
          <Atom size={32} />,
          <FileTs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/BoraCodar-5-Calculadora",
        linkWeb: "https://bora-codar-5-calculadora.vercel.app/",
        resumo: "Calculadora",
      },
    ],
    Projeto9: [
      {
        id: 9,
        titulo: "NLW - SpaceTime",
        imagem: Project09,
        tecnologias: [
          <Atom size={32} />,
          <FileTs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/NLW-Spacetime",
        resumo:
          "NLW Spacetime é uma aplicação de recordação de memórias, onde o utilizador pode adicionar uma timeline com memórias marcantes da sua vida.",
      },
    ],
    Projeto10: [
      {
        id: 9,
        titulo: "NLW Return Impulse Web",
        imagem: Project01,
        tecnologias: [
          <FileTs size={32} />,
          <Atom size={32} />,
          <FileJs size={32} />,
          <FileCss size={32} />,
        ],

        linkRepo: "https://github.com/gersonlamela/nlw-return-impulse-web",
        linkWeb: "https://nlw-return-impulse-web-snowy-sigma.vercel.app/",
        resumo:
          "O Feedback Widget, carinhosamente apelidado de FeedGet, foi criado com a intenção de enviar feedbacks, seja um problema, uma ideia ou outro, de acordo com a preferência do utilizador. Permite enviar o feedback em texto, juntamente com uma captura de ecrã, diretamente para o email do programador do site.",
      },
    ],
  });
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center bg-graylight dark:bg-dark200 ">
        <div className="grid overflow-hidden grid-cols-1 lg:grid-cols-2 content-center  py-[50px]  rounded-xl bg-white flex flex-col items-center md:justify-between focus:outline-none focus:ring-0">
          {Object.values(projects).map((posts, idx) => (
            <div
              key={idx}
              className="relative rounded-md p-3 hover:bg-gray-100 mb-10"
            >
              {posts.map((post) => (
                <div key={idx} className="">
                  <div className="w-[312px] h-[auto]  md:w-[auto] border-l-4 border-dark dark:border-blue  flex items-center justify-center bg-graydark dark:bg-dark">
                    <img
                      src={post.imagem}
                      alt="FOTO"
                      srcSet=""
                      className="w-[312px] h-[312px]  md:w-[auto] text-blue text-5xl font-bold object-contain"
                    />
                  </div>
                  <div className="flex items-start flex-col gap-8">
                    <h3 className="text-2xl mt-8 flex flex-col md:flex-row justify-between font-medium text-dark dark:text-light leading-5">
                      {post.titulo}
                    </h3>

                    <div className="text-dark dark:text-light text-justify w-[312px] md:w-[530px] max-h-[70px] scrollbarStyle pr-6">
                      {post.resumo ? (
                        <span className="">{post.resumo}</span>
                      ) : (
                        <p className="text-dark dark:text-light w-[312px] md:w-[438px]">
                          Sem Descrição
                        </p>
                      )}
                    </div>

                    <span className="flex flex-row gap-2 text-dark dark:text-blue text-base font-medium">
                      {post.tecnologias}
                    </span>
                    <div className="flex gap-5 items-center">
                      {post.linkRepo?.length > 0 ? (
                        <a
                          href={post.linkRepo}
                          target="_blank"
                          className="relative inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        >
                          <button className="btn PurpleToBlue before:bg-graylight ">
                            <GithubLogo className="icon" />
                            <span>Github</span>
                          </button>
                        </a>
                      ) : (
                        ""
                      )}
                      {post.linkWeb?.length > 0 ? (
                        <a
                          href={post.linkWeb}
                          target="_blank"
                          className="relative inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        >
                          <button className="btn PurpleToBlue before:bg-graylight">
                            <GoogleChromeLogo className="icon" />
                            <span>Visualizar</span>
                          </button>
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
