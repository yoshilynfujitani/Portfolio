import React, { useContext } from "react";
import DarkModeContext from "../../contexts/darkMode";
import { LuSun, LuMoon } from "react-icons/lu";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

export const DarkModeSwitch = () => {
  const { dark, handledark } = useContext(DarkModeContext);
  return (
    <button
      className="text-xl flex items-center space-x-1"
      onClick={() => handledark(!dark)}
    >
      <LuSun />
      {dark ? <BsToggleOn /> : <BsToggleOff />}
      <LuMoon />
    </button>
  );
};
