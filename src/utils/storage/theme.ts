import { setStore, getStore } from './common'

const KEY = 'theme'

export const setTheme = (theme?: 'light' | 'dark' | null) => {
  setStore(KEY, theme)
}

export const getTheme = () => getStore<'light' | 'dark' | null>(KEY)
