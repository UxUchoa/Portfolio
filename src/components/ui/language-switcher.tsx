'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="flex items-center space-x-1 rounded-md border border-zinc-300 bg-white p-1 dark:border-white/10 dark:bg-white/5">
      <button
        onClick={() => changeLanguage('pt')}
        className={cn(
          'rounded px-2.5 py-1 text-sm font-semibold transition-colors duration-300',
          currentLanguage === 'pt'
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-200'
        )}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={cn(
          'rounded px-2.5 py-1 text-sm font-semibold transition-colors duration-300',
          currentLanguage === 'en'
            ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950'
            : 'text-zinc-600 hover:text-emerald-700 dark:text-zinc-300 dark:hover:text-emerald-200'
        )}
      >
        EN
      </button>
    </div>
  );
} 
