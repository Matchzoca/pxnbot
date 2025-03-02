import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

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
            <div className="bg-[#0f0f0f] bg-opacity-100 rounded-lg shadow-2xl max-w-md w-full space-y-4 p-6" style={{ boxShadow: ' rgba(42, 31, 86, 0.4) 0px 5px, rgba(42, 31, 86, 0.3) 0px 10px, rgba(42, 31, 86, 0.2) 0px 15px, rgba(42, 31, 86, 0.1) 0px 20px, rgba(42, 31, 86, 0.05) 0px 25px, rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }}> 
              <h2 className="text-2xl">Preview do Comando</h2>
              {previewPXN ? (
                <img src={previewPXN} alt={`Preview do comando ${title}`} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
              ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                  <span style={{ fontSize: '20px', color: '#ccc' }}>Sem imagem</span>
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
