import React from 'react'
import { render } from 'react-dom'
import { Grid, Col, Row } from 'react-bootstrap'
import { LikedImages, Flights } from './'
import { getFlights } from './../utils/requests'

// const dummyRequestParams = {
//   num_passengers: 2,
//   departure_station: 'HKG',
//   arrival_station: 'KUL',
//   departure_date: '2017-05-19',
//   return_date: '2017-05-27'
// }

export default class Destination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flights: {}
    }
  }

  // componentDidMount() {
  //   getFlights(dummyRequestParams).then(flights => {
  //     // const { departing_flights, return_flights } = flights
  //     this.setState(flights)
  //   })
  // }

  render() {
    const { destination, closestAirportCode } = this.props
    // const { departing_flights, return_flights } = this.state

    // console.log('this.state', this.state)
    // console.log('flights', flights)

    const {
      location_name: name,
      location_id: id,
      liked_image_urls: likedImages,
      suggested_image_urls: suggestedImages
    } = destination

    return (
      <div>
        <h1>Let's go to {name}!</h1>
        <LikedImages likedImages={likedImages} />
      </div>
    )
  }
}
        // <Flights closestAirportCode={closestAirportCode} destinationAirportCode={id} />

        // <Flights flights={{ departing_flights, return_flights }} />

        // {
        //   departing_flights && <Flights flights={departing_flights} />
        // }
        // {
        //   return_flights && <Flights flights={return_flights} />
        // }
