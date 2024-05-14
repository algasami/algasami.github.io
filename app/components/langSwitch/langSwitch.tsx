import { Translate } from "@mui/icons-material";
import { Icon, IconButton } from "@mui/material";
import { Locale } from "i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

const langs: Locale[] = ["en", "zh-tw"];

const LangSwitch = ({ lang }: { lang: Locale }) => {
  const index = langs.findIndex((v) => v === lang);
  const pathname = usePathname();

  if (index === -1) return <></>;
  const next = langs[(index + 1) % langs.length];
  const arr = pathname.substring(1).split("/");
  arr[0] = next;

  return (
    <IconButton
      href={"/" + arr.join("/")}
      aria-label="Toggle Language (zh-tw/en)"
      color="inherit"
      type="button"
    >
      <Translate fontSize="large" />
    </IconButton>
  );
};

export default LangSwitch;
