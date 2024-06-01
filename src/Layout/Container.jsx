import { useContext } from "react";
import DarkModeContext from "../contexts/darkMode";

export default function Container({ children }) {
  const { dark } = useContext(DarkModeContext);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="transition-all duration-300 ease-in-out  dark:text-neutral-200 dark:bg-neutral-800 font-default">
        <div className="">{children}</div>
      </main>
    </div>
  );
}
