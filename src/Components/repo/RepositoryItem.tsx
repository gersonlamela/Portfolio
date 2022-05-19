import { Atom, FileHtml, FileJs, FileCss, Link, FileTs } from "phosphor-react";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    language: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <div className="rounded-xl bg-white flex flex-col items-center md:justify-between focus:outline-none focus:ring-0">
        <div className="relative rounded-md p-3 hover:bg-gray-100 mb-10">
          <div className="w-[312px] h-[200px]  md:w-[530px] border-l-4 border-blue flex items-center justify-center bg-light dark:bg-dark ">
            <img
              src={props.repository.description}
              alt="FOTO"
              srcSet=""
              className="text-blue text-5xl font-bold"
            />
          </div>

          <div className="flex items-start flex-col gap-8">
            <h3 className="text-2xl mt-8 flex flex-col md:flex-row justify-between font-medium text-dark dark:text-light leading-5">
              {props.repository.name}
            </h3>

            <p className="text-dark dark:text-light w-[312px] md:w-[438px] max-h-16 overflow-auto">
              {props.repository.description ? (
                props.repository.description
              ) : (
                <p className="text-dark dark:text-light w-[312px] md:w-[438px]">
                  Sem Descrição
                </p>
              )}
            </p>
            <span className="flex flex-row gap-2 text-dark dark:text-blue text-base font-medium">
              {props.repository.created_at}
            </span>
            <span className="flex flex-row gap-2 text-dark dark:text-blue text-base font-medium">
              {props.repository.language == "CSS" ? (
                <FileCss size={32} />
              ) : props.repository.language == "TypeScript" ? (
                <FileTs size={32} />
              ) : props.repository.language == "JavaScript" ? (
                <FileJs size={32} />
              ) : props.repository.language == "HTML" ? (
                <FileHtml size={32} />
              ) : (
                <p>Sem Linguagem</p>
              )}
            </span>
            <a
              href={props.repository.html_url}
              target="_blank"
              className="relative inset-0 rounded-md ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
            >
              <button className="btn PurpleToBlue">
                <Link className="icon" />
                <span>Visualizar</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
