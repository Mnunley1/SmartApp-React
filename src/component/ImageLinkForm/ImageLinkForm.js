import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="fa3">
        This smart app can detect faces in an image. Give it a try!
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text"></input>
          <button className="btn w-30 grow f4 link ph3 pv2 dib white">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
