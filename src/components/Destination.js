import React from 'react'
import { render } from 'react-dom'
import { Grid, Col, Row } from 'react-bootstrap'
import { LikedImages } from './'

export default class Destination extends React.Component {
  render() {
    const { destination } = this.props
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

