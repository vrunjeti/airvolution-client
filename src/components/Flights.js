import React from 'react'
import { render } from 'react-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { getFlights } from './../utils/requests'

export default class Flights extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment().format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      numPassengers: 1
    }
    console.log('moment()', moment())
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)
    this.submit = this.submit.bind(this)
  }

  // componentDidMount() {
  //   getFlights(dummyRequestParams).then(flights => {
  //     // const { departing_flights, return_flights } = flights
  //     this.setState(flights)
  //   })
  // }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    })
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    })
  }

  handleChangeNumPassengers(event) {
    this.setState({
      numPassengers: event.target.value
    })
  }

  submit() {
    const { closestAirportCode, destinationAirportCode } = this.props
    const { numPassengers, startDate, endDate } = this.state

    // TODO: look at date format
    getFlights({
      num_passengers: numPassengers,
      departure_station: closestAirportCode,
      arrival_station: destinationAirportCode,
      departure_date: startDate,
      return_date: endDate
    }).then(flights => {
      this.setState(flights)
    })
  }

  render() {
    const { closestAirportCode, destinationAirportCode } = this.props
    const { departing_flights, return_flights } = this.state
    // const { startDate, endDate, numPassengers } = this.state

    return (
      <div>
        <FlightForm
          {...this.props}
          {...this.state}
          submit={this.submit}
        />
        <FlightsList
          {...this.props}
          {...this.state}
          submit={this.submit}
        />
      </div>
    )
  }
}

class FlightForm extends React.Component {
  render() {
    const {
      numPassengers,
      startDate,
      endDate,
      handleChangeStart,
      handleChangeEnd,
      handleChangeNumPassengers,
      submit
    } = this.props

    return (
      <div>
        When do you want to go?
        <form>
          <input
            value={numPassengers}
            onChange={handleChangeNumPassengers}
          />
          <DatePicker
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={handleChangeStart}
          />
          <DatePicker
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            onChange={handleChangeEnd}
          />
          <button type="button" onClick={submit}>Submit</button>
        </form>
      </div>
    )
  }
}

class FlightsList extends React.Component {
  render() {
    const {
      closestAirportCode,
      destinationAirportCode,
      departing_flights,
      return_flights,
      // startDate,
      // endDate,
      // numPassengers
    } = this.props

    return (
      <div>

      </div>
    )
  }
}

const Flight = (props) => {
  const {
    departure_station,
    arrival_station,
    currency_code,
    final_fare,
    STA_UTC,
    STD_UTC
  } = props

  return (
    <div>
      HIIIII
      {departure_station}
    </div>
  )

  // return (
  //   <div>
  //     {departure_station} - {arrival_station}
  //     <br>
  //     {currency_code} {final_fare}
  //     <br>
  //     {STD_UTC} - {STA_UTC}
  //   </div>
  // )
}
