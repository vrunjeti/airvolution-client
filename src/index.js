import React from 'react'
import { render } from 'react-dom'
import './styles/styles.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
