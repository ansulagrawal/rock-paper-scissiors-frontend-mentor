import React, { useEffect, useState } from "react";
import Choice from "../components/Choice";
import { useDispatch, useSelector } from "react-redux";
import { choices } from "../config/confing";
import { clearChoise } from "../app/slice/userSlice";


function Result() {
  const dispatch = useDispatch();

  const { userChoice, computerChoise, gameStatus } = useSelector(state => state.user);
  const selectedChoice = choices.find(option => option.name === userChoice);

  const handlePlayAgain = () => {
    dispatch(clearChoise());
  };
  return (
    <main className="flex items-center justify-center gap-20 text-center">
      <div id="user-choise">
        <h2 className="uppercase text-white mb-14">You Picked</h2>
        {selectedChoice && (
          <Choice
            className={`${selectedChoice.background} cursor-default h-[300px] w-[300px] shadow-boxShadow-1 `}
            innerClasName="h-[230px] w-[230px]"
            icon={selectedChoice.icon}
          />
        )}
      </div>
      {gameStatus && (
        <div>
          <h2 className="uppercase font-extraBold text-white text-5xl">{gameStatus === "Draw" ? "Draw" : `You ${gameStatus}`}</h2>
          <button className="bg-white text-darkBlue font-semiBold text-2xl uppercase mt-5 py-4 px-14 rounded-xl cursor-pointer" onClick={handlePlayAgain}>
            Play Again
          </button>
        </div>
      )}
      <div id="computer-choise">
        <h2 className="uppercase text-white mb-14">The house picked</h2>
        {computerChoise !== null && computerChoise !== undefined ? (
          <Choice
            className={`${choices[computerChoise].background} h-[300px] w-[300px] shadow-boxShadow-1 cursor-default`}
            innerClasName="h-[230px] w-[230px]"
            icon={choices[computerChoise].icon}
          />
        ) : (
          <Choice isEmpty innerClasName="h-[230px] w-[230px]" />
        )}
      </div>
    </main>
  );
}

export default Result;
