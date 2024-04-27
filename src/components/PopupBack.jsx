import '../styles/PopupBack.scss'
const PopupBack = ({ children, onClick }) => {

  return (
    <div className='background' onClick={onClick} >
      {children}
    </div>
  )
}

export { PopupBack }