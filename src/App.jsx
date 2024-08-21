/* eslint-disable no-unused-vars */
import "./App.css";

import img_links from "../img_links.json";
import Button from "@mui/material/Button";
import ImgCard from "./components/ImgCard";
import { useState } from "react";
import PopupModal from "./components/PopupModal";
function App() {
  return (
    <>
      <div className="w-full h-full min-h-[100vh] bg-gray-400">
        <div className="flex flex-row items-center justify-center p-12">
        <PopupModal/>
        </div>
      </div>
    </>
  );
}

export default App;
