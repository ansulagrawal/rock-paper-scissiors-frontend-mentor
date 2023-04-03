import iconRock from "../assets/icon-rock.svg";
import iconPaper from "../assets/icon-paper.svg";
import iconScissors from "../assets/icon-scissors.svg";
import iconLizard from "../assets/icon-lizard.svg";
import iconSpock from "../assets/icon-spock.svg";

export const choices = [
  {
    name: "spock",
    icon: iconSpock,
    className: "absolute bg-blue-300 top-[235px] left-[180px]",
    background:"bg-blue-300",
    win: ['scissors', 'rock'],
  },
  {
    name: "paper",
    icon: iconPaper,
    className: "absolute bg-blue-500 top-[60px] left-[240px]",
    background:"bg-blue-500",
    win: ['spock', 'rock'],
  },
  {
    name: "scissors",
    icon: iconScissors,
    className: "absolute bg-yellow-500 top-[60px] left-[-70px]",
    background:"bg-yellow-500",
    win: ['paper', 'lizard'],
  },
  {
    name: "lizard",
    icon: iconLizard,
    className: "absolute bg-purple-400 top-[235px] left-[-2px]",
    background:"bg-purple-400",
    win: ['spock', 'paper'],
  },
  {
    name: "rock",
    icon: iconRock,
    className: "absolute bg-red-400 top-[-65px] left-[75px]",
    background:"bg-red-400",
    win: ['lizard', 'scissors'],
  },
];


export const COMPUTER_RESULT_TIMER = 500;
