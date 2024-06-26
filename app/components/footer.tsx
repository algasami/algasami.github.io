import { Locale } from "i18n-config";
import Link from "next/link";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400">
          <div>{`Copyright © 2022 - ${new Date().getFullYear()}`}</div>
          <Link href={`/${locale}`}>Algasami</Link>
        </div>
      </div>
    </footer>
  );
}
