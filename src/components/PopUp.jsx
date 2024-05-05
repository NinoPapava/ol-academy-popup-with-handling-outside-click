import { useRef, useState, useEffect } from 'react'
import { PopupBack } from './PopupBack'
import { PopupContent } from './PopupContent';
import '../styles/PopUp.scss'

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    isOpen
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='container'>
      <div className="container-background">
        {isOpen ? (
          <>
            <PopupBack onClick={() => setIsOpen(!isOpen)}>
              <PopupContent onClose={() => setIsOpen(!isOpen)} />
            </PopupBack>
          </>
        ) : (
          <>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'ORDER IT'}</button>
          </>
        )}
      </div>
    </div>
  )
}

export { PopUp }