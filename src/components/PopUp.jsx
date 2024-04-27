import { useRef, useState, useEffect } from 'react'
import { PopupBack } from './PopupBack'
import { PopupContent } from './PopupContent';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false)
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && popupRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className='container'>
      <div className="container-background">
        {isOpen ? (
          <>
            <PopupBack >
              <PopupContent />
            </PopupBack>
          </>
        ) : (
          <>
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open Popup'}</button>
          </>
        )}
      </div>
    </div>
  )
}

export { PopUp }