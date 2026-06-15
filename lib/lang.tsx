'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Lang = 'en' | 'sq' | 'it'

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
}

const LangContext = createContext<LangCtx>({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('mahoro_lang') as Lang | null
    if (saved && ['en', 'sq', 'it'].includes(saved)) setLangState(saved)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    queueMicrotask(() => localStorage.setItem('mahoro_lang', l))
  }, [])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
