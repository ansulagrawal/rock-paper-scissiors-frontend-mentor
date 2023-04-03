import React from "react";
import Logo from "../assets/logo-bonus.svg";
import { useSelector } from "react-redux";

function Header() {
  const {computerScore = 0, userScore = 0} = useSelector(state => state?.user || {});
  return (
    <nav className="max-w-[700px] m-auto flex justify-center mt-10 mb-16">
      <div className="border-4 border-lightGray flex flex-row justify-between items-center w-[700px] h-[150px] rounded-2xl p-5">
        <img src={Logo} alt="logo" className="h-[105px] w-[110px]" />
        <div className="rounded-md bg-white h-28 w-[150px] flex flex-col justify-center text-center">
          <span className="text-base text-lightBlue font-semiBold">YOUR SCORE</span>
          <h1 className="text-6xl font-extraBold text-darkBlue ">{userScore}</h1>
        </div>
        <div className="rounded-md bg-white h-28 w-[150px] flex flex-col justify-center text-center">
          <span className="text-base text-lightBlue font-semiBold">COMPUTER SCORE</span>
          <h1 className="text-6xl font-extraBold text-darkBlue ">{computerScore}</h1>
        </div>
      </div>
    </nav>
  );
}

export default Header;
