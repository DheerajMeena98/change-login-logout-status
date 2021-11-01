import './index.css'

const Logout = props => {
  const {showMessage} = props

  const OnClickLogout = () => {
    showMessage()
  }

  return (
    <button type="button" className="click-button" onClick={OnClickLogout}>
      {' '}
      Logout{' '}
    </button>
  )
}

export default Logout
