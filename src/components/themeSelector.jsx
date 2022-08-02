import { useState } from "react";

export default function ThemeSelector() {
  const setTheme = (theme) => {
    fetch(`/theme?t=${theme}`, {
      method: "POST",
      body: JSON.stringify({ theme }),
    });
  };

  const [activeTheme, setActiveTheme] = useState();
  return (
    <form>
      <button type="submit" onClick={() => setTheme("light")}>
        Light
      </button>
      <button type="submit" onClick={() => setTheme("autumn")}>
        Autumn
      </button>
      <button type="submit" onClick={() => setTheme("dark")}>
        Dark
      </button>
    </form>
  );
}
