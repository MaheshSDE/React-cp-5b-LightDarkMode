// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onClick = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'dark-mode' : 'light-mode'
    const headingMode = isLightMode ? 'colorBlack' : 'colorWhite'
    const buttonText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg-container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className={`heading ${headingMode}`}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
