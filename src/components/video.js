import React from "react"
import propTypes from "prop-types"

const Video = ({ src }) => (
  <div className="videoWrapper">
    <iframe
      title="livestream"
      width="560"
      height="315"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
)

Video.propTypes = {
  src: propTypes.string.isRequired,
}

export default Video
