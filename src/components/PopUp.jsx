import { useRef, useState, useEffect } from 'react'
import '../styles/PopUp.scss'

const PopUp = () => {
  const [isOpenButton, setIsOpenButton] = useState(false)
  const [isPopupPage, setIsPopupPage] = useState(false);
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setIsOpenButton(false);
      setIsPopupPage(false);
    }
  };

  useEffect(() => {
    isOpenButton
      ? document.addEventListener('mousedown', handleClickOutside)
      : document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpenButton]);

  const handleClick = (event) => {
    event.stopPropagation();
  }
  const handleOpen = () => {
    setIsOpenButton(true);
    setIsPopupPage(true);
  };

  const handleClose = () => {
    setIsOpenButton(false);
    setIsPopupPage(false);
  };

  return (
    <div className='container'>
      <div className="container-background" ref={popupRef} >
        {isOpenButton && isPopupPage ? (
          <>
            <div className='background' onClick={() => setIsPopupPage(false)}>
              <div className='content' onClick={handleClick} >
                <h1>10% OFF! DON'T MISS OUT!</h1>
                <p>9 minutes 54 seconds</p>
                <div className='close-button'>
                  <button onClick={handleClose}>Close</button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <button onClick={handleOpen}>{isOpenButton ? 'Close' : 'ORDER IT'}</button>
          </>
        )}
      </div>
    </div>
  )
}

export { PopUp }