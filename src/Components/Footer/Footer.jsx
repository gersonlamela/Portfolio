import { BracketsCurly } from "phosphor-react";
import React from "react";

export function Footer() {
  return (
    <div className="w-full h-[100px] flex items-center justify-between px-[180px] text-dark dark:text-graylight bg-graydark dark:bg-dark">
      <span className="text-base font-normal">
        @ {new Date().getFullYear()} - Gerson Lamela
      </span>
      <span className="flex items-center gap-2">
        Powered by{" "}
        <a href="https://github.com/gersonlamela" target="_blank">
          <BracketsCurly size={32} className="text-blue" />
        </a>
      </span>
    </div>
  );
}
