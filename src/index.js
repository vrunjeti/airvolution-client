import React from 'react'
import { render } from 'react-dom'
import './styles/styles.scss'
import { Destination } from './components'
import { dummyData } from './utils/dummyData'

class App extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      this.setState({ currentLocation: { latitude, longitude } })
    })
  }

  render() {
    return (
      <div className="container">
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
