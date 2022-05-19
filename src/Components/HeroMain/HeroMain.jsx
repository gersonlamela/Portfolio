import React from "react";
import { bg } from "../../helper/images";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function HeroMain() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center sm:items-start max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center">
          <p className="text-dark dark:text-light uppercase text-2xl flex flex-col justify-center sm:justify-start font-semibold leading-[50px] z-10">
            Olá, eu sou <br />
            <span className="text-blue text-4xl sm:text-6xl flex items-center">
              Gerson Lamela
            </span>{" "}
            <br />
            DESENVOLVEDOR FULLSTACK
          </p>
        </div>
        <div className="mt-[60px] flex gap-5">
          <button type="button" className="btn PurpleToBlue">
            <LinkedinLogo className="icon" />
            <span>Linkedin</span>
          </button>
          <button type="button" className="btn PinkToPurlple">
            <GithubLogo className="icon" />

            <span>Github</span>
          </button>
        </div>
        <img
          src={bg}
          alt=""
          srcSet=""
          className="absolute right-0 top-20 opacity-30 md:top-32 md:opacity-100 duration-[0.8s] h-[500px] md:hover:translate-x-20 md:hover:scale-[1.3]"
        />
      </div>
    </>
  );
}
