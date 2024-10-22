import { useLang } from "./LanguageContext";
import { getTranslation } from "./langUtils";

export default function LangSwitcher() {
  const context = useLang();

  function toggleLanguage() {
    context.setLang(() => (context.lang === "en" ? "de" : "en"));
  }
  const styles = {
    padding: "20px 40px", 
    backgroundColor: "none",
    border: "1px solid #5e69ee",
    borderRadius: "8px",
    color: "#5e69ee"
  }
  return (
    <>
      <button onClick={toggleLanguage} style={styles}>
        {getTranslation(context.lang, "changeLanguage")}
      </button>
    </>
  );
}
