"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Rank Libras",
    id: "rank_libras",
    content: (
      <ul className="list-disc pl-2">
        <li>1- Babossa — <span className="transparent_libras"><span id="libras" onMouseOver={() => document.getElementById('libras').innerText = 'O jogador mais viciado do servidor 🌹'} onMouseOut={() => document.getElementById('libras').innerText = '§1.722.891 Libras.'}>§1.722.891 Libras.</span></span></li>
        <li>2- AgiotaMoreira — <span className="transparent_libras">§338.059 Libras.</span></li>
        <li>3- Pixelon — <span className="transparent_libras">§310.355 Libras.</span></li>
        <li>4- sorinmarkov — <span className="transparent_libras">§89.084 Libras.</span></li>
        <li>5- pattison — <span className="transparent_libras">§61.502 Libras.</span></li>
        <li>6- yuu21 — <span className="transparent_libras">§44.160 Libras.</span></li>
      </ul>
    ),
  },
  {
    title: "Ranking",
    id: "ranking",
    content: (
      <ul className="list-disc pl-2">
        <li>1- Evironi#8688 - <span className="transparent_rankxp"><span id="level" onMouseOver={() => document.getElementById('level').innerText = 'bug??'} onMouseOut={() => document.getElementById('level').innerText = 'Lv.2526'}>Lv.2526</span></span></li>
        <li>2- Babossa#8097 - <span className="transparent_rankxp">Lv.76</span></li>
        <li>3- AgiotaMoreira#5028 - <span className="transparent_rankxp">Lv.74</span></li>
        <li>4- Sorinmarkov#6898 - <span className="transparent_rankxp">Lv.46</span></li>
        <li>5- pattison#4169 - <span className="transparent_rankxp">Lv.43</span></li>
        <li>6- Oero#9170 - <span className="transparent_rankxp">Lv.29</span></li>
        <li>7- luluzinha#9531 - <span className="transparent_rankxp">Lv.21</span></li>
        <li>8- vai se fude#3044 - <span className="transparent_rankxp">Lv.12</span></li>
        <li>9- vgKennedy#4032 - <span className="transparent_rankxp">Lv.8</span></li>
        <li>10- A Nix.#5261 - <span className="transparent_rankxp">Lv.3</span></li>
      </ul>
    ),
  },
  {
    title: "Eventos",
    id: "eventos",
    content: (
      <ul className="list-disc pl-2">
        <li>1- Sorteios <span className="transparent_events">(x24)</span></li>
        <li>2- Sessão Netflix <span className="transparent_events">(x7)</span></li>
        <li>3- Halloween + Semanas do Horror<span className="transparent_events">(5x)</span></li>
        <li>4- Natal <span className="transparent_events">(4x)</span></li>
        <li>5- Semana StarWars <span className="transparent_events">(1x)</span></li>
        <li>6- Copa do Mundo <span className="transparent_events">(1x)</span></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("rank_libras");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/PxnBot-About2.gif" width={500} height={500} alt="Gif animado logotipo" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="gradient-text">PixelBot</span> | About Me
          </h2>
          <p className="text-base lg:text-lg">
          Olá, sou o <strong>PixelBot</strong>, com muita diversão e entretenimento, pronto para animar o seu dia! Com uma variedade de funções ao meu dispor.&nbsp;&nbsp;
          <u>Possuo sistemas de Economia sofisticados</u> que adicionam uma camada extra de envolvimento e competição. Quem sabe você pode se tornar o mais rico do Bot? 
          Além disso, estou me aventurando no mundo do <strong><span className="gradient-text">RPG.</span></strong> Prepare se para embarcar em jornadas épicas e batalhas emocionantes.</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("rank_libras")}
              active={tab === "rank_libras"}
            >
              {" "}
              🪙 Rank Libras{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("ranking")}
              active={tab === "ranking"}
            >
              {" "}
              🌟 Ranking Bot{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("eventos")}
              active={tab === "eventos"}
            >
              {" "}
              📆 Eventos{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
  
};

export default AboutSection;
