import { useState } from 'react'
import './header.css'
import axios from 'axios'

export function SearchBar ({ setData, setError, setLoading }) {
  const [value, setValue] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${import.meta.env.VITE_API_KEY}`)
      .then(res => setData(res.data))
      .catch(() => setError('Error al recuperar la ciudad'))
      .finally(() => setLoading(false))
  }

  return <form className='input-form' onSubmit={handleSubmit}>
    <div className='input-container'>
      <button type='submit'>
        <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="transparent" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>

      <input type='text' onChange={e => setValue(e.target.value)} spellCheck={false} placeholder='Busca una ciudad'></input>

      <div className='input-outline'/>
    </div>
  </form>
}
