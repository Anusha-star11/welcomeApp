// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button type="button" className="buttonA">
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" className="buttonA">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="welcome-background">
        <h1>Welcome</h1>
        <p>Thank you!Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
