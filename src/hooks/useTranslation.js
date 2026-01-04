'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/translations/en';
import { es } from '@/translations/es';

const translations = { en, es };

export function useTranslation() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (key) => {
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return value;
  };
}

