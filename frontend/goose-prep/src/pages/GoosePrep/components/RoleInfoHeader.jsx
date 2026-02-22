import React from "react";

const RoleInfoHeader = ({
  role,
  topicsToFocus,
  level,
  questions,
  description,
  lastUpdated,
}) => {
  return (
    <div className="bg-[#FDFDFB] relative border-b border-black/[0.04] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.1] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#E4B429 0.5px, transparent 0.5px), linear-gradient(90deg, #E4B429 0.5px, transparent 0.5px)`, 
          backgroundSize: '60px 60px' 
        }} 
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDFDFB] via-transparent to-transparent z-0" />

      <div className="container mx-auto px-6 md:px-0 relative z-10">
        <div className="h-[180px] flex flex-col justify-center">
          <div className="flex items-start">
            <div className="flex-grow">
              <h2 className="text-3xl font-medium tracking-tight text-black">{role}</h2>
              <p className="text-[14px] text-gray-500 font-light mt-1">
                {topicsToFocus}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <div className="text-[10px] font-bold text-white bg-black px-3 py-1 rounded uppercase tracking-wider">
              Level: {level}
            </div>

            <div className="text-[10px] font-bold text-black border border-black/10 bg-white/50 px-3 py-1 rounded uppercase tracking-wider">
              {questions} Q&A
            </div>

            <div className="text-[10px] font-bold text-gray-400 px-3 py-1 rounded uppercase tracking-wider">
              Updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleInfoHeader;