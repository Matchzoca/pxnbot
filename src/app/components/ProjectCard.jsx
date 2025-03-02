import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ProjectCard = ({ title, description, exemplo_cmd, previewPXN }) => {
  const [linkText, setLinkText] = useState("Como usar");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="shadow-lg rounded-xl p-4 bg-white dark:bg-gray-800 w-full">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          {title}
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {description}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center"
          onMouseEnter={() => setLinkText(exemplo_cmd)}
          onMouseLeave={() => setLinkText("Como usar")}
        >
          <CodeBracketIcon className="h-5 w-5 text-blue-500 mr-2" />
          <span style={{ opacity: 0.5 }}>{linkText}</span>
        </div>
        <div 
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer' }} 
        >
          <EyeIcon className="h-5 w-5 text-blue-500" />
        </div>
      </div>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#0f0f0f] bg-opacity-100 rounded-lg shadow-2xl max-w-md w-full space-y-4 p-6">
              <h2 className="text-2xl">Preview do Comando</h2>
              {previewPXN ? (
                <div className="relative w-full h-[300px]">
                  <Image 
                    src={previewPXN}
                    alt={`Preview do comando ${title}`}
                    layout="responsive"
                    width={500}
                    height={300}
                    style={{ objectFit: 'contain', borderRadius: '10px' }}
                  />
                </div>
              ) : (
                <div className="flex justify-center items-center h-[200px]">
                  <span className="text-xl text-gray-400">Sem imagem</span>
                </div>
              )}
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-md button"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
