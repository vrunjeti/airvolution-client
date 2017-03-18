import React from 'react'
import { render } from 'react-dom'
import { LikedImages } from './'

export default class Destination extends React.Component {
  render() {
    const { destination } = this.props

    return (
      <div>
        <LikedImages likedImages={destination.liked_image_urls} />
      </div>
    )
  }
}

