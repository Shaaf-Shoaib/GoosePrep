import React from "react";
import { LuTrash2, LuArrowUpRight } from "react-icons/lu";
import { getInitials } from "../../utils/helper";

const SummaryCard = ({
  role,
  topicsToFocus,
  level,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) => {
  const colors = [
    { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
    { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
    { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200" },
    { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200" },
  ];

  const colorIndex = role ? role.charCodeAt(0) % colors.length : 0;
  const theme = colors[colorIndex];
  const initials = getInitials(role);

  return (
    <div 
      className="bg-white border border-black/[0.08] rounded-xl overflow-hidden cursor-pointer hover:border-black/20 transition-all group relative flex flex-col h-full shadow-sm hover:shadow-md"
      onClick={onSelect}
    >
      <div className="p-5 flex-grow">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 shrink-0 ${theme.bg} ${theme.text} ${theme.border} border rounded-lg flex items-center justify-center font-bold transition-transform group-hover:scale-105`}>
            <span className={initials.length > 2 ? "text-[10px]" : initials.length === 2 ? "text-[13px]" : "text-lg"}>
              {initials}
            </span>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <button
              className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-rose-500 transition-all cursor-pointer"
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
            >
              <LuTrash2 size={16} />
            </button>
            <LuArrowUpRight size={20} className="text-black/10 group-hover:text-black transition-colors" />
          </div>
        </div>

        <h2 className="text-[17px] font-bold tracking-tight text-black leading-snug">
          {role}
        </h2>
        <p className="text-[12px] text-gray-400 font-medium mt-1">
          {topicsToFocus}
        </p>

        <p className="text-[13px] text-gray-500 leading-relaxed font-light mt-4 line-clamp-2">
          {description}
        </p>
      </div>

      <div className="px-5 py-4 bg-[#FCFCFA] border-t border-black/[0.03] flex items-center justify-between">
        <div className="flex gap-2">
          <span className="flex items-center justify-center text-[9px] font-black uppercase tracking-widest text-white bg-black px-2 h-5 rounded">
            {level}
          </span>
          <span className="flex items-center justify-center text-[9px] font-bold uppercase tracking-widest text-gray-500 border border-black/10 px-2 h-5 rounded bg-white">
            {questions} Q&A
          </span>
        </div>
        <span className="text-[10px] font-medium text-gray-300 uppercase tracking-tighter">
          {lastUpdated}
        </span>
      </div>
    </div>
  );
};

export default SummaryCard;