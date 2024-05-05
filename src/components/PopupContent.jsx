import '../styles/PopupContent.scss'

const PopupContent = ({ onClose }) => {

  const handleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div className='content' onClick={handleClick} >
      <h1>10% OFF! DON'T MISS OUT!</h1>
      <p>9 minutes 54 seconds</p>
      <div className='close-button'>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export { PopupContent }