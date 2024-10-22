const dictionaries = {
    en: {
      greeting: "This is random text",
      changeLanguage: "Change Language",
    },
    de: {
      greeting: "Dies ist ein zufälliger Text",
      changeLanguage: "Sprache ändern",
    },
  };
  
  export function getDictionary(lang) {
    return dictionaries[lang];
  }
  
  export function getTranslation(lang, key) {
    return dictionaries[lang][key];
  }