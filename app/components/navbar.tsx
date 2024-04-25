"use client";
import { Box } from "@mui/system";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import { IconButton, Modal } from "@mui/material";
import React from "react";
import ThemeSwitch from "./themeSwitch";
import Link from "next/link";
import { LinkList } from "data/linklist";
import { Locale } from "i18n-config";
import { type getDictionary } from "get-dictionary";
import LangSwitch from "./langSwitch/langSwitch";

export function DynamicLink({ href, name }) {
  return (
    <Link
      className="font-bold no-underline dynamic-link"
      style={{ textDecoration: "none" }}
      href={href}
    >
      {name}
    </Link>
  );
}

type TNavbarLocale = ReturnType<typeof getDictionary>["navbar"];

function genList(className: string, lang: Locale, dict: TNavbarLocale) {
  return LinkList.map((s) => {
    return (
      <div key={s.link} className={className + " flex flex-col justify-center"}>
        <DynamicLink href={`/${lang}${s.link}`} name={dict[s.name]} />
      </div>
    );
  });
}

function NavIcon({ size }) {
  return (
    <Link href="/">
      <NearMeRoundedIcon fontSize={size} />
    </Link>
  );
}

function BigNav({
  lang,
  navbardict,
}: {
  lang: Locale;
  navbardict: TNavbarLocale;
}) {
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-row">
        <span className="flex flex-col justify-center mx-1 text-2xl text-black dark:text-zinc-50">
          ALGASAMI
        </span>
        {genList("mx-3", lang, navbardict)}
      </div>
      <div className="flex flex-row">
        <LangSwitch lang={lang} />
        <ThemeSwitch />
      </div>
    </nav>
  );
}

// Mobile nav bar:
// Opens a modal on trigger
function SmallNav({
  lang,
  navbardict,
}: {
  lang: Locale;
  navbardict: TNavbarLocale;
}) {
  const [open, setOpen] = React.useState(false);
  function onClick() {
    setOpen(true);
  }
  function onClose() {
    setOpen(false);
  }
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-col justify-center">
        <IconButton aria-label="navigate" color="primary" onClick={onClick}>
          <NearMeRoundedIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="flex flex-row justify-center">
        <LangSwitch lang={lang} />
        <ThemeSwitch />
      </div>
      <Modal
        open={open}
        onClose={onClose}
        className="flex content-center justify-center"
        style={{ top: "25%" }}
      >
        <Box
          className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 shadow-lg shadow-zinc-700 border border-zinc-400"
          style={{
            maxHeight: "40vh",
            minHeight: "20vh",
            minWidth: "40vw",
            maxWidth: "70vw",
            zIndex: 2,
          }}
        >
          <div className="p-2 w-auto h-auto flex flex-col text-center">
            <h2>Menu</h2>
            {genList("text-xl font-bold", lang, navbardict)}
          </div>
        </Box>
      </Modal>
    </nav>
  );
}
export default function Navbar({
  lang,
  navbardict,
}: {
  lang: Locale;
  navbardict: TNavbarLocale;
}) {
  return (
    <div
      className={`navbar fixed z-50  w-full shadow-xl p-2 bg-opacity-80`}
      style={{
        backdropFilter: `blur(10px)`,
        WebkitBackdropFilter: `blur(10px)`,
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <BigNav lang={lang} navbardict={navbardict} />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <SmallNav lang={lang} navbardict={navbardict} />
      </Box>
    </div>
  );
}
