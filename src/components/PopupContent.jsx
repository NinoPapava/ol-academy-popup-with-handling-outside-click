
const PopupContent = ({ onClose, onClick }) => {

  return (
    <div className='content'>
      <h1>This is Our Popup</h1>
      <div className='close-button'>
        <button onClick={onClick}>Close</button>
      </div>
    </div>
  )
}

export { PopupContent }