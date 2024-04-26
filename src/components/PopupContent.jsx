
const PopupContent = ({ onClose }) => {

  return (
    <div className='content'>
      <h1>This is Our Popup</h1>
      <div className='close-button'>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export { PopupContent }