import request from 'superagent'

const BASE_API_URL = 'https://airvolution-staging.herokuapp.com'

export const getFlights = ({
  num_passengers,
  departure_station,
  arrival_station,
  departure_date,
  return_date
}) => {
  return request.get(`${BASE_API_URL}/get_flights`)
    .query({
      num_passengers,
      departure_station,
      arrival_station,
      departure_date,
      return_date
    })
    .then(res => res.body)
}

export const getClosestAirport = ({
  latitude,
  longitude
}) => {
  return request.get(`${BASE_API_URL}/get_closest_airport`)
    .query({
      latitude,
      longitude
    })
    .then(res => res.body)
}
