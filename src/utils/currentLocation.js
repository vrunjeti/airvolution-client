function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigation.geolocation.getCurrentPosition(position => {
      resolve(position)
    })
  })
}

export { getCurrentLocation }
