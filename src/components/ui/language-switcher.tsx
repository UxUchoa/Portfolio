'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.resolvedLanguage || i18n.language;
  const isPortuguese = currentLanguage.startsWith('pt');
  const isEnglish = currentLanguage.startsWith('en');

  return (
    <div className="language-control flex items-center gap-1 p-1" aria-label="Language">
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        aria-pressed={isPortuguese}
        className={cn(
          'language-option px-2.5 py-1 text-sm font-black transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          isPortuguese
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-300'
        )}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-pressed={isEnglish}
        className={cn(
          'language-option px-2.5 py-1 text-sm font-black transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          isEnglish
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-300'
        )}
      >
        EN
      </button>
    </div>
  );
} 
