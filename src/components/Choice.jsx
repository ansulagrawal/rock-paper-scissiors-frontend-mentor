import React from "react";

const Choice = ({ icon, className = "", handleSelection, innerClasName = "", isEmpty, emptyClassName = '' }) => {
  if(isEmpty){
    return <div className={`h-[220px] w-[220px] my-[100px] rounded-full bg-[#182341] bg-opacity-20 ${emptyClassName}`}></div>
  }
  return (
    <div className={`cursor-pointer h-[150px] w-[150px] rounded-full flex justify-center items-center hover:shadow-boxShadow-3 ${className}`} onClick={handleSelection}>
      <div className={`h-[110px] w-[110px] rounded-full  bg-white flex justify-center items-center shadow-boxShadow-2 ${innerClasName}`}>
        <img src={icon} className="h-[50%]" alt="" />
      </div>
    </div>
  );
};

export default Choice;
