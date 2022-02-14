import { useLocalStorage } from "./useLocalStorage"

export function App() {
  
  const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}