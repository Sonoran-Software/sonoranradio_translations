import ar from './ar.json';
import cs from './cs.json';
import da from './da.json';
import de from './de.json';
import enUS from './en-US.json';
import esEs from './es-ES.json';
import fi from './fi.json';
import fr from './fr.json';
import it from './it.json';
import ja from './ja.json';
import ko from './ko.json';
import nl from './nl.json';
import pl from './pl.json';
import pt from './pt.json';
import ru from './ru.json';
import sv from './sv.json';
import tr from './tr.json';
import zh from './zh.json';

const messages = {
  ar: ar, // Arabic
  cs: cs, // Czech
  da: da, // Danish
  de: de, // German
  'en-US': enUS, // English
  'es-ES': esEs, // Spanish
  fi: fi, // Finnish
  fr: fr, // French
  it: it, // Italian
  ja: ja, // Japanese
  ko: ko, // Korean
  nl: nl, // Dutch
  pl: pl, // Polish
  pt: pt, // Portuguese
  ru: ru, // Russian
  sv: sv, // Swedish
  tr: tr, // Turkish
  zh: zh, // Chinese
};

export const languageNames: Record<keyof typeof messages, string> = {
  ar: 'العربية',
  cs: 'Čeština',
  da: 'Dansk',
  de: 'Deutsch',
  'en-US': 'English (US)',
  'es-ES': 'Español (España)',
  fi: 'Suomi',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  sv: 'Svenska',
  tr: 'Türkçe',
  zh: '中文',
};

export default messages;
