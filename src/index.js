import React from 'react'
import { render } from 'react-dom'
import './styles/styles.scss'
import { Destination } from './components'
import { dummyData } from './utils/dummyData'
import { getClosestAirport } from './utils/requests'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      closestAirportCode: ''
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      this.setState({ currentLocation: { latitude, longitude } }, () => {
        const { currentLocation } = this.state
        getClosestAirport(currentLocation).then(closestAirportCode => {
          this.setState({ closestAirportCode })
        })
      })
    })
  }

  render() {
    const { closestAirportCode } = this.state

    return (
      <div className="container">
        {
          dummyData.map(destination => (
            <Destination
              destination={destination}
              closestAirportCode={closestAirportCode}
            />
          ))
        }
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
