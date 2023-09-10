import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const TopButton = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed bottom-10 right-5">
      <button
        className="bg-slate-500 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded"
        onClick={handleTop}
      >
        <AiOutlineArrowUp className="text-white" />
      </button>
    </div>
  );
};

export default TopButton;
