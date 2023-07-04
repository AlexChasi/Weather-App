import './header.css'
import { ModeButton } from './mode-button'
import { SearchBar } from './search-bar'

export function Header ({ setData, setLoading, setError }) {
  return <header>
    <h1>Weather App</h1>
    <SearchBar setData={setData} setLoading={setLoading} setError={setError} />
    <ModeButton />
  </header>
}
