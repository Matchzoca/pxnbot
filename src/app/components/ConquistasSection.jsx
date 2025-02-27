"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimacaoNumeros = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const conquistasList = [
  {
    metric: "Comandos",
    value: "246",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "201,000",
  },
  {
    metric: "Servidores (Privados)",
    value: "25",
  },
  {
    metric: "Libras gerados ",
    value: "4624589",
  },
];

const ConquistasSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {conquistasList.map((conquistas, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 "
            >
              <h2 className="text-white text-4xl font-bold flex flex-row ">
                {conquistas.prefix}
                <AnimacaoNumeros
                  includeComma
                  animateToNumber={parseInt(conquistas.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold "
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {conquistas.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base ">{conquistas.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConquistasSection;
