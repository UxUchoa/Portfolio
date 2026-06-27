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
    <div className="flex items-center space-x-1 rounded-md border border-zinc-300 bg-white p-1 dark:border-white/10 dark:bg-white/5" aria-label="Language">
      <button
        type="button"
        onClick={() => changeLanguage('pt')}
        aria-pressed={isPortuguese}
        className={cn(
          'rounded px-2.5 py-1 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
          isPortuguese
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-200'
        )}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-pressed={isEnglish}
        className={cn(
          'rounded px-2.5 py-1 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400',
          isEnglish
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-200'
        )}
      >
        EN
      </button>
    </div>
  );
} 
