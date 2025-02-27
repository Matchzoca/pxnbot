"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "⛏️ /Minerar",
    description: `Minere para conseguir cristais e minerios e consiga money trabalhando como minerador`,
    //image: "/images/projects/1.png",
    tag: ["All", "Economia"],
    exemplo_cmd: ";minerar",
    previewPXN: "../../images/projectsCmds/CmdMinerar.png",
  },
  {
    id: 2,
    title: "🤑 /Apostar",
    description: "Desafie a sorte com o comando apostar! Ganhe muito ou perca tudo em um instante!",
    //image: "/images/projects/2.png",
    tag: ["All", "Economia"],
    exemplo_cmd: ";apostar @menção1 @menção2",
    previewPXN: "../../images/projectsCmds/CmdApostar.png",
  },
  {
    id: 3,
    title: "💍 /Casar",
    description: "Use o comando casar com a sua alma gêmea e celebre o amor no Discord!",
    //image: "/images/projects/3.png",
    tag: ["All", "Economia"],
    exemplo_cmd: ";casar @menção",
    previewPXN: "../../images/projectsCmds/CmdCasar.png",
  },
  {
    id: 4,
    title: "🪙 /Caraecoroa",
    description: "Teste sua sorte com o comando cara e coroa! Uma moeda virtual decide seu destino!",
    //image: "/images/projects/4.png",
    tag: ["All", "Diversão"],
    exemplo_cmd: ";caracoroa @menção1",
    previewPXN: "",
  },
  {
    id: 5,
    title: "💘 /Ship",
    description: "Descubra o amor no servidor! Use o comando shipar para ver a compatibilidade entre membros!",
    //image: "/images/projects/5.png",
    tag: ["All", "Diversão"],
    exemplo_cmd: ";ship @menção1 @menção2",
    previewPXN: "",
  },
  {
    id: 6,
    title: "🎱 /Catioro - /8ball",
    description: "Fale com o catioro! Use o comando catioro para obter respostas divertidas, como no 8ball!",
    //image: "/images/projects/6.png",
    tag: ["All", "Diversão"],
    exemplo_cmd: ";catioro {mensagem} /catioro voce é?",
    previewPXN: "../../images/projectsCmds/CmdCatioro.png",
  },
  {
    id: 7,
    title: "🔒 /lock - /unlock",
    description: "Controle o acesso ao canal! Use lock canal para bloquear e unlock canal para liberar!",
    //image: "/images/projects/6.png",
    tag: ["All", "Moderação"],
    exemplo_cmd: "/lock {id_channel} or /unlock {id_channel}",
    previewPXN: "", 
  },
  {
    id: 8,
    title: "(Aviso) Comandos faltando",
    description: " Ainda falta 80% dos comandos a serem adicionados aqui, calma ai...",
    //image: "/images/projects/6.png",
    tag: ["All", "Moderação", "Diversão", "Economia", "Ações", "Novos"],
    exemplo_cmd: "Pixelon está com preguiça :)",
    previewPXN: "", 
  },
  
];
const ComandosSection = () => {
  const [tag, setTag] = useState("All");
  const [PesquisaTerm, setPesquisaTerm] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const identificadorTag = (newTag) => {
    setTag(newTag);
  };

  const handleSearchChange = (event) => {
    setPesquisaTerm(event.target.value);
  };

  const handleSearchClear = () => {
    setPesquisaTerm("");
  };

  const filtroComandos = projectsData.filter((project) =>
    project.tag.includes(tag) && project.title.toLowerCase().includes(PesquisaTerm.toLowerCase())
  );

  const card_AnimacaoVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Comandos :3
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <ProjectTag
          onClick={identificadorTag}
          name="Novos"
          isSelected={tag === "News"}
        />
        <ProjectTag
          onClick={identificadorTag}
          name="Economia"
          isSelected={tag === "Economy"}
        />
        <ProjectTag
          onClick={identificadorTag}
          name="Moderação"
          isSelected={tag === "Moder"}
        />
        <ProjectTag
          onClick={identificadorTag}
          name="Ações"
          isSelected={tag === "Actions"}
        />
        <ProjectTag
          onClick={identificadorTag}
          name="Diversão"
          isSelected={tag === "Fun"}
        />
        <ProjectTag
          onClick={identificadorTag}
          name="All"
          isSelected={tag === "All"}
        />
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={handleSearchChange} 
            value={PesquisaTerm}
            className="rounded-full border-2 px-6 py-3 text-xl cursor-pointer text-[#ADB7BE] border-slate-600 hover:border-white"
          />
          {PesquisaTerm && (
            <button 
              onClick={handleSearchClear}
              className="absolute right-5 top-1/2 transform -translate-y-1/2"
              style={{ color: '#121212' }}
            >
              X
            </button>
          )}
        </div>
      </div>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-2 md:gap-12">
        {filtroComandos.map((comando, index) => (
          <motion.li
            key={index}
            variants={card_AnimacaoVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={comando.id}
              title={comando.title}
              description={comando.description}
              imgUrl={comando.image}
              exemplo_cmd={comando.exemplo_cmd}
              previewPXN={comando.previewPXN}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ComandosSection;