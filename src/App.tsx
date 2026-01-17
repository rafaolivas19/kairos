import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Button onClick={() => { alert('Holis') }}>Holis</Button>
      </ThemeProvider>
    </div>
  )
}

export default App
