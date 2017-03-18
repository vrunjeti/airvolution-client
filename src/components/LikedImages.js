import React from 'react'
import { render } from 'react-dom'
import InstagramEmbed from 'react-instagram-embed'
import { Grid, Col, Row } from 'react-bootstrap'

export default class LikedImages extends React.Component {
  render() {
    const { likedImages } = this.props

    return (
      <div>
        <Row className="show-grid">
          {
            likedImages.map(url => (
              <Col xs={12} md={4}>
                <InstagramEmbed url={url} key={url}/>
              </Col>
            ))
          }
        </Row>
      </div>
    )
  }
}
