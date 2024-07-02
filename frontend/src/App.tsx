import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Editor from "./components/editor";
import Input from "./components/input";
import Submit from "./components/submit";

function App() {
  return (
    <>
      <div className="flex pt-20 h-full min-h-screen bg-black/100 justify-center px-3">
        <div className="max-w-3xl h-full w-full  mx-auto">
          <Submit />
          <Editor />
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
