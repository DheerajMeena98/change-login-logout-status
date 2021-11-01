import {Component} from 'react'

import './index.css'

import Login from '../Login'

import Logout from '../Logout'

import Message from '../Message'

class Home extends Component {
  state = {
    isCurrentlyLogin: false,
  }

  showMessage = () => {
    this.setState(prevState => {
      if (prevState.isCurrentlyLogin === false) {
        return {isCurrentlyLogin: true}
      }
      return {isCurrentlyLogin: false}
    })
  }

  render() {
    const {isCurrentlyLogin} = this.state
    return (
      <div className="login-logout-bcg-container">
        <Message isCurrentlyLogin={isCurrentlyLogin} />
        {isCurrentlyLogin && <Logout showMessage={this.showMessage} />}
        {!isCurrentlyLogin && <Login showMessage={this.showMessage} />}
      </div>
    )
  }
}

export default Home
