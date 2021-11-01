import {Component} from 'react'

import './index.css'

class Message extends Component {
  render() {
    const {isCurrentlyLogin} = this.props
    let currentStatus
    if (isCurrentlyLogin) {
      currentStatus = <h1 className="display-message"> Welcome User </h1>
    } else {
      currentStatus = <h1 className="display-message"> Please Login </h1>
    }

    return <div>{currentStatus}</div>
  }
}

export default Message
