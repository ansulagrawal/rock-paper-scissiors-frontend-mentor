import React from "react";
import Choice from "../components/Choice";
import { useDispatch } from "react-redux";
import { selectChoice, setComputerChoise } from "../app/slice/userSlice";
import { COMPUTER_RESULT_TIMER, choices } from "../config/confing";

function UserSelection() {
  const dispatch = useDispatch();

  const handleSelection = choiceSelected => {
    dispatch(selectChoice(choiceSelected));
    setTimeout(() => {
      dispatch(setComputerChoise(Math.floor(Math.random() * 5)));
    }, COMPUTER_RESULT_TIMER);
  };

  return (
    <div className="bg-pentagon-pattern bg-no-repeat mt-32 h-[313px] w-[329px] m-auto relative">
      {choices?.map(choice => (
        <Choice
          className={`${choice.className} shadow-boxShadow-1`}
          icon={choice.icon}
          handleSelection={() => handleSelection(choice?.name)}
        />
      ))}
    </div>
  );
}

export default UserSelection;
