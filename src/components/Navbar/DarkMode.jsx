import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  const element = document.documentElement;

  const toggleTheme = React.useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {
        // Ignore localStorage errors
      }
    } else {
      element.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {
        // Ignore localStorage errors
      }
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Switch to dark mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={DarkButton}
        alt="Switch to light mode"
        onClick={toggleTheme}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
