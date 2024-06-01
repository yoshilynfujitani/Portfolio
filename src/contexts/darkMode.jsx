import { createContext, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const context = { dark, handledark };

  function handledark(setter) {
    setDark(setter);
    console.log(dark);
  }
  return (
    <DarkModeContext.Provider value={context}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
