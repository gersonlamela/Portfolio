import React, { useState } from "react";
import {bg} from "../../helper/images";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

export function HeroMain() {
  

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-start sm:items-start overflow-x-hidden relative">
    <div className="w-full max-w-7xl flex items-center justify-center flex-col">
       <div className="flex flex-col">
        <div className="flex flex-col items-start ">
          <p className="text-dark dark:text-light uppercase text-2xl flex flex-col justify-center sm:justify-start font-semibold leading-[50px] z-10">
            Olá, eu sou <br />
            <span className="text-blue text-4xl sm:text-6xl flex items-center">
              Gerson Lamela
            </span>{" "}
            <br />
            DESENVOLVEDOR FULLSTACK
          </p>
        </div>
        <div className="mt-[60px]   flex gap-5">
          <button type="button" className="btn PurpleToBlue">
            <LinkedinLogo className="icon" />
            <span>Linkedin</span>
          </button>
          <button type="button" className="btn PinkToPurple">
            <GithubLogo className="icon" />
            <span>Github</span>
          </button>
        </div>
        </div>
        </div>
      
          <img
            src={bg}
            alt=""
            className={`absolute right-0  opacity-30  h-[500px] md:opacity-100 duration-[0.8s] hover:translate-x-20 hover:scale-125 `}

          />
    
      </div>
    </>
  );
}
