import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import axios from 'axios'
import { Card } from './components/card/card'
import { DegreesButton } from './components/degrees-button/degrees-button'

function App () {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isCentigrade, setIsCentigrade] = useState(true)

  console.log(data)
  useEffect(() => {
    setLoading(true)
    const onSuccess = (crd) => {
      const { latitude, longitude } = crd.coords

      axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_API_KEY}`)
        .then((res) => setData(res.data))
        .catch(() => setError('Hubo un error al recuperar la información.'))
        .finally(() => setLoading(false))
    }
    const onError = () => {
      setLoading(false)
      setError('Busca una ciudad en el buscador')
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }, [])

  return (
    <main>
      <Header setData={setData} setError={setError} setLoading={setLoading} />
      <Card data={data} isCentigrade={isCentigrade} loading={loading} error={error} />
      <DegreesButton setIsCentigrade={setIsCentigrade} isCentigrade={isCentigrade} />
    </main>
  )
}

export default App
