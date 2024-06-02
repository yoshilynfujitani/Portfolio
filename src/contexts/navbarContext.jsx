import { createContext, useState } from "react";

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const context = { isOpen, handleNavbarStatus };

  function handleNavbarStatus(setter) {
    setIsOpen(setter);
  }
  return (
    <NavbarContext.Provider value={context}>{children}</NavbarContext.Provider>
  );
}

export default NavbarContext;
