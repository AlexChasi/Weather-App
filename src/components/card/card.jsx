import './card.css'
import { Spinner } from '../spinner/spinner'

const converter = (degrees, isCentigrade) => {
  if (!degrees) return
  const returnValue = isCentigrade
    ? degrees
    : (degrees * 9 / 5) + 32

  return `${Math.floor(returnValue)}°`
}

export function Card ({ data, loading, error, isCentigrade }) {
  return <section>
    {
      loading
        ? <Spinner />
        : error
          ? <span className='error'>{error}</span>
          : data &&
            <div className='card-wrap'>
              <img src={`icons/${data.weather[0].description}.svg`} className='image' />
              <article>
                {
                  data &&
                  <>
                    <h2>{converter(data?.main?.temp, isCentigrade)}</h2>
                    <div className='entrys'>
                      <h4>Viento</h4>
                      <h4>Nubes</h4>
                      <h4>Presión</h4>
                    </div>
                    <h3 className='place'>{data.name}</h3>
                    <div className='desc'>
                      <h4>{data.weather[0].description}</h4>
                    </div>
                  </>
                }
              </article>
            </div>
    }
  </section>
}
