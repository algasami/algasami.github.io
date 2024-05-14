import { useEffect, useState } from "react";
import { useThemeHook } from "../hooks/themeHook";
import { IconButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  const { theme, setTheme } = useThemeHook();

  const isDark = theme === "dark";

  return (
    <IconButton
      aria-label="navigate"
      color="inherit"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <DarkModeOutlined fontSize="large" />
      ) : (
        <LightModeOutlined fontSize="large" />
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
