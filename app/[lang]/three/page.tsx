import { i18n } from "i18n-config";
import { Preloader } from "../../components/preloader";

export async function generateStaticParams() {
  return i18n.locales.map((loc) => ({
    lang: loc,
  }));
}

export default function ThreePage() {
  return <Preloader />;
}
