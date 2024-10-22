import { useLang } from "./LanguageContext";
import { getTranslation } from "./langUtils";

export default function Text() {
  const { lang } = useLang();

  return <h1>{getTranslation(lang, "greeting")}</h1>;
}