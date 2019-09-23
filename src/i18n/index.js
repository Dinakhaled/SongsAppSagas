import en from "./en.json";
import ar from "./ar.json";

const langs = {
    en,
    ar
};

export default function (lang = "en") {
    localStorage.setItem('lang', lang)
    return langs[lang];
};