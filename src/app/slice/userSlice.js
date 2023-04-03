import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { choices } from "../../config/confing";

const initialState = {
  userChoice: null,
  userScore: 0,
  computerScore: 0,
  computerChoise: null,
  gameStatus: null,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    selectChoice: (state, action) => {
      state.userChoice = action.payload;
    },
    winGame: state => {
      state.score += 1;
    },
    resetGame: state => {
      state.score = 0;
    },
    setComputerChoise: (state, action) => {
      if (action.payload !== null && action.payload !== undefined) {
        const computerChoiceName = choices[action.payload].name;
        const userChoise = choices.find(option => option.name === state.userChoice);
        if (userChoise.name === computerChoiceName) {
          state.gameStatus = "Draw";
        } else {
          if (userChoise.win.includes(computerChoiceName)) {
            state.userScore += 1;
            state.gameStatus = "Win";
          } else {
            state.gameStatus = "Lose";
            state.computerScore += 1;
          }
        }
      }
      state.computerChoise = action.payload;
    },
    clearChoise: state => {
      state.userChoice = null;
      state.computerChoise = null;
      state.gameStatus = null;
    },
  },
});

export const { selectChoice, winGame, resetGame, setComputerChoise, clearChoise } = usersSlice.actions;

export default usersSlice.reducer;
