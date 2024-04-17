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
    <Link
      locale={next}
      href={"/" + arr.join("/")}
      aria-label="Toggle Language (zh-tw/en)"
      type="button"
      className="h-10 w-10 rounded p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 sm:h-12 sm:w-12 sm:p-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill={"currentColor"}
        className="text-gray-900 transition-colors dark:text-gray-100"
      >
        <path d="m475-80 185-480h79L924-80h-65l-45-117H584L539-80h-64ZM162-201l-42-42 201-201q-51-53-85.5-107.5T183-660h65q16 43 43.5 85t72.5 88q46-48 85-117.5T505-740H40v-60h290v-80h60v80h290v60H567q-17 78-61.5 159.5T406-443l102 104-24 63-121-125-201 200Zm443-51h188l-94-248-94 248Z" />
      </svg>
    </Link>
  );
};

export default LangSwitch;
