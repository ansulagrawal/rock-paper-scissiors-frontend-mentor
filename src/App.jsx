import React from "react";
import Header from "./components/Header";
import UserSelection from "./pages/UserSelection";
import Rules from "./components/Rules";
import { useSelector } from "react-redux";
import Result from "./pages/Result";

function App() {
  const state = useSelector(state => state.user);

  return (
    <div className="App">
      <Header />
      {state.userChoice ? <Result /> : <UserSelection />}
      <Rules />
    </div>
  );
}

export default App;
