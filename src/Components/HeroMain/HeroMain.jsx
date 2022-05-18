import React from "react";
import { bg } from "../../helper/images";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function HeroMain() {
  return (
    <>
      <div className="w-full h-[500px] flex flex-col justify-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-col">
          <p className="text-dark dark:text-light uppercase text-2xl font-semibold leading-[50px]">
            Olá, eu sou <br />
            <span className="text-blue text-6xl ">Gerson Lamela</span> <br />
            DESENVOLVEDOR FULLSTACK
          </p>
        </div>
        <div className="mt-[60px] flex gap-5">
          <button
            type="button"
            className="btn linkedin flex items-center justify-center gap-2 text-base font-medium w-[130px] h-10 px-1 border-0 z-[1] relative duration-[0.3s] text-dark dark:text-light before:bg-light before:dark:bg-dark hover:scale-110"
          >
            <LinkedinLogo className="text-dark dark:text-light w-6 h-6" />
            <span>Linkedin</span>
          </button>
          <button
            type="button"
            className="btn github flex items-center justify-center gap-2 text-base font-medium w-[130px] h-10 px-1 border-0 z-[1] relative duration-[0.3s] text-dark dark:text-light before:bg-light before:dark:bg-dark hover:scale-110"
          >
            <GithubLogo className="text-dark dark:text-light w-6 h-6" />

            <span>Github</span>
          </button>
        </div>
        <img
          src={bg}
          alt=""
          srcset=""
          className="absolute right-0 duration-[0.8s] h-[500px] hover:translate-x-20 hover:scale-[1.3]"
        />
      </div>
    </>
  );
}
