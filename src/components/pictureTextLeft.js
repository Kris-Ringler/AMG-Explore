import React from "react"
import Image from "./image"

const PictureTextLeft = ({ image, primaryText, secondaryText, buttonText }) => (
  <div className="picture-text-background py-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text-center">
            <p className="title text-uppercase">{primaryText}</p>
            <p className="description">{secondaryText}</p>
            <button className="text-uppercase mt-4 py-2 px-3">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="image col-12 col-md-6 p-5">
          <Image filename={image} alt={primaryText} />
        </div>
      </div>
    </div>
  </div>
)

export default PictureTextLeft
