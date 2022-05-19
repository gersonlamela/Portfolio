import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Experience() {
  let [categories] = useState({
    ESTÁGIO: [
      {
        id: 1,
        title: "Programador Web (Estágio)",
        empresa: "MULTI-DI - Conquistagadget, Lda.",
        date: "[ 06/04/2021 – 22/07/2021 ]",
        topico1: "Controlo e gestão de conteúdos de websites da empresa",
        topico2: "Otimização do código de websites",
        topico3: "Desenvolver um site de vendas online (E-commerce).",
        topico4: "Apoio na criação de novos conteúdos digitais",
        topico5: "Controlo de base de dados",
        topico6: "Suporte informático e digita",
      },
    ],
    FORMAÇAO: [
      {
        id: 1,
        title: "Técnico de Multimédia",
        empresa: "IPTA - Instituto Profissional de Tecnologias Avançadas",
        date: "[ 12/09/2018 – 22/07/2021 ]",
        topico1: "Concessão de produtos multimédia interativos",
        topico2: "Captação, digitalização e tratamento de imagens, som e texto",
        topico3:
          "Editação de conteúdos com vista à criação de soluções de comunicação",
        topico4: "Integração de conteúdos utilizando ferramentas de autor",
        topico5: "Programação de aplicações multimédia",
        topico6: "Programação Web e Mobile",
      },
    ],
    UNIVERSIDADE: [
      {
        id: 1,
        title: "Engenharia Multimédia",
        empresa: "ISTEC – Instituto Superior de Tecnologias Avançadas – Porto",
        date: " [ 04/10/2021 – Atual ]",
        topico1: "Desenvolvimento de sistemas multimédia",
        topico2: "Produção de conteúdos interativos para e-learning",
        topico3: "Programação de aplicações para a Web",
        topico4:
          "Conceção e desenvolvimento de sistemas Web, designadamente: comércio eletrónico e Learning",
        topico5: "Management Systems",
        topico6:
          "Desenvolvimento de aplicações na área da animação gráfica 2D/3D",
      },
    ],
  });

  return (
    <>
      <div className="w-full h-screen flex flex-row items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Tab.Group>
          <Tab.List className="flex flex-col border-l-1 border-blue outline-none space-x-1 rounded-xl p-1 ">
            <h1 className="w-full py-10 text-4xl  text-dark dark:text-light flex flex-col items-center  max-w-7xl mx-auto ">
              Experiências
            </h1>
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-[192px] h-[55px] text-lg text-dark dark:text-light font-medium",
                    "focus:outline-none",
                    selected
                      ? "bg-white shadow border-l-2 border-blue bg-dark200 text-light"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-28  w-[650px] h-[185px] ml-5">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white h-[185px] flex flex-col justify-between",
                  "focus:outline-none focus:ring-0"
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative rounded-md p-3 hover:bg-gray-100"
                    >
                      <h3 className="text-2xl flex justify-between font-medium text-dark dark:text-light leading-5">
                        {post.title}
                        <span className="text-base">{post.date}</span>
                      </h3>
                      <span className="text-dark dark:text-blue text-base font-medium">
                        {post.empresa}
                      </span>

                      <ul className="flex justify-between h-[120px] flex-col mt-5 text-xs font-normal leading-4 text-dark dark:text-light">
                        <li className="list text-sm">{post.topico1}</li>
                        <li className="list text-sm">{post.topico2}</li>
                        <li className="list text-sm">{post.topico3}</li>
                        <li className="list text-sm">{post.topico4}</li>
                        <li className="list text-sm">{post.topico5}</li>
                        <li className="list text-sm">{post.topico6}</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md ",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}
