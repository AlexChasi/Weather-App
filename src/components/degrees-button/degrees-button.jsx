import './degrees-button.css'

export function DegreesButton ({ isCentigrade, setIsCentigrade }) {
  const handleClick = () => {
    setIsCentigrade(!isCentigrade)
  }

  return <div className='button-section'>
    <button onClick={handleClick}>
      {
        isCentigrade
          ? 'Cambiar a F°'
          : 'Cambiar a C°'
      }
    </button>
  </div>
}
