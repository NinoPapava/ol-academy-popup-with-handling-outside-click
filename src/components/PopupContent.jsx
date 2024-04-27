import '../styles/PopupContent.scss'

const PopupContent = ({ onClose }) => {

  const handleClick = (event) => {
    event.stopPropagation();
  }

  return (
    <div className='content' onClick={handleClick} >
      <h1>This is Our Popup</h1>
      <div className='close-button'>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export { PopupContent }