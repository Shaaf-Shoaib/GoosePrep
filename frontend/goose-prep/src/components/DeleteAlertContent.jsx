import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-5">
      <p className="text-[14px]">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="bg-black text-white px-6 py-2 rounded-md text-[13px] font-medium hover:bg-gray-800 transition-all shadow-lg shadow-black/5 cursor-pointer"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
