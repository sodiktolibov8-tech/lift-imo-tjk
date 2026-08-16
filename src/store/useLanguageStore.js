import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useLanguageStore = create(
  persist(
    (set) => ({
      lang: 'ru', // язык по умолчанию ('ru', 'en' или 'tj')
      setLang: (lang) => set({ lang }),
      toggleLang: () => set((state) => ({ lang: state.lang === 'ru' ? 'en' : 'ru' })),
    }),
    {
      name: 'language-storage', // сохранение выбора в localStorage
    }
  )
);