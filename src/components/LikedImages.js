import React from 'react'
import { render } from 'react-dom'
import InstagramEmbed from 'react-instagram-embed'

export default class LikedImages extends React.Component {
  render() {
    const { likedImages } = this.props

    return (
      <div>
        {
          likedImages.map(url => <InstagramEmbed url={url} />)
        }
      </div>
    )
  }
}
