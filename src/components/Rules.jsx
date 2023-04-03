import React, { useState } from "react";
import CloseIcon from "../assets/icon-close.svg";
import RulesImg from "../assets/image-rules-bonus.svg";

function Rules() {
  const [open, setOpen] = useState(false);

  const handeleClick = () => setOpen(isOpen => !isOpen);
  return (
    <div>
      {open && <Modal handeleClick={handeleClick} />}
      <button className="absolute bottom-7 right-7 rounded-lg h-9 w-32 border-2 border-white grid place-items-center text-white uppercase" onClick={handeleClick}>
        Rules
      </button>
    </div>
  );
}

export default Rules;

function Modal({ handeleClick }) {
  return (
    <div className="modal absolute h-[100vh] w-[100vw] top-0 bottom-0 grid place-items-center">
      <div className="w-96 h-[450px] bg-white rounded-lg">
        <div className="m-5 flex justify-between">
          <h2 className="uppercase font-extraBold text-2xl text-darkBlue">Rules</h2>
          <img src={CloseIcon} alt="close" onClick={handeleClick} className="cursor-pointer w-6 h-6" />
        </div>
        <div id="rule-image" className="mx-5">
          <img src={RulesImg} alt="rules" />
        </div>
      </div>
    </div>
  );
}
