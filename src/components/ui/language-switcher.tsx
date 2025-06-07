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
    <div className="flex items-center space-x-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1">
      <button
        onClick={() => changeLanguage('pt')}
        className={cn(
          'px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300',
          currentLanguage === 'pt'
            ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        )}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={cn(
          'px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300',
          currentLanguage === 'en'
            ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
            : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  );
} 