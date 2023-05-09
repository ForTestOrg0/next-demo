'use client'

import { useDarkMode } from 'usehooks-ts'
export const DarkMode: React.FC = () => {
  const { isDarkMode, toggle, enable, disable } = useDarkMode()

  return (
    <div>
      <p suppressHydrationWarning>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <button onClick={toggle}>Toggle</button>
      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
    </div>
  )
}