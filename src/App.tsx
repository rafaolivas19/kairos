import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { CopyInput } from './components/ui/copy-input'

const DEFAULT_LOCALE:Intl.LocalesArgument =
  navigator.languages?.[0] ??
  navigator.language ??
  'es-MX'

function App() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null)

  useEffect(() => {
    setCurrentDate(new Date())

    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className='w-150 p-10 flex flex-col gap-4 bg-popover rounded-sm'>
          <CopyInput
            key='friendly-date-time'
            value={currentDate?.toLocaleString(DEFAULT_LOCALE, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
          ></CopyInput>
          <CopyInput
            key='local-date'
            value={currentDate?.toLocaleDateString(DEFAULT_LOCALE, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          ></CopyInput>
          <CopyInput
            key='local-time'
            value={currentDate?.toLocaleTimeString(DEFAULT_LOCALE, {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: true,
            })}
          ></CopyInput>
          <CopyInput
            key='epoch-seconds'
            value={
              currentDate
                ? Math.floor(currentDate.getTime() / 1000).toString()
                : undefined
            }
          ></CopyInput>
          <CopyInput
            key='epoch-ms'
            value={
              currentDate
                ? currentDate.getTime().toString()
                : undefined
            }
          ></CopyInput>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
