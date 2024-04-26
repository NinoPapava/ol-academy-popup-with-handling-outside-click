import { useRef, useState, useEffect } from 'react'
//import { PopupBack } from './PopupBack'
//import { PopupContent } from './PopupContent';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='container'>
        <div className="container-background">
            {isOpen} <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open Popup'}</button>
        </div>
    </div>
  )
}

export { PopUp }