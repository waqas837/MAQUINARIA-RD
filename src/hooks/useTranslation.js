'use client';

import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/translations/en';
import { es } from '@/translations/es';

const translations = { en, es };

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = useMemo(() => {
    return translations[language] || translations.en;
  }, [language]);

  return useMemo(() => {
    return (key) => {
      const keys = key.split('.');
      let value = t;
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) return key;
      }
      return value;
    };
  }, [t]);
}

