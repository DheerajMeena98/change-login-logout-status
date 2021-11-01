import './index.css'

const Login = props => {
  const {showMessage} = props

  const OnClickLogin = () => {
    showMessage()
  }
  return (
    <button className="click-button" type="button" onClick={OnClickLogin}>
      {' '}
      Login{' '}
    </button>
  )
}
export default Login
