import React from 'react'
import { render } from 'react-dom'
import './styles/styles.scss'
import { Destination } from './components'
import { dummyData } from './utils/dummyData'

class App extends React.Component {
  render() {
    return (
      <div>
        {
          dummyData.map(destination => <Destination destination={destination} />)
        }
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
