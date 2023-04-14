import { useEffect, useState, useRef } from "react";
import { addVideo } from "../modules/videoManager";
import { Card, CardBody } from "reactstrap";

const UploadVideo = () => {
  const [videoUpload, setVideoUpload] = useState({
    Title: "",
    Description: "",
    Url: "",
  });

  const handleSubmitUpload = (evt) => {
    evt.preventDefault();
    if (videoUpload.Title) {
      addVideo(videoUpload).then((videos) => {
        setVideoUpload(videos);
      });
    } else {
      alert("Title cannot be blank.");
    }
  };

  return (
    <div>
      <Card>
        <p className="text-left px-2">Upload a video</p>
        <CardBody>
          <div>
            <h2>Upload a Video:</h2>
            <fieldset>
              <div className="form-group">
                <label htmlFor="Title"></label>
                <input
                  required
                  id="title"
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  onChange={(event) => {
                    const copy = { ...videoUpload };
                    copy.Title = event.target.value;
                    setVideoUpload(copy);
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="Description"></label>
                <input
                  required
                  id="Description"
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  onChange={(event) => {
                    const copy = { ...videoUpload };
                    copy.Description = event.target.value;
                    setVideoUpload(copy);
                  }}
                />
              </div>
            </fieldset>
            <fieldset>
              <div className="form-group">
                <label htmlFor="Url"></label>
                <input
                  required
                  id="Url"
                  type="text"
                  className="form-control"
                  placeholder="Video Url"
                  onChange={(event) => {
                    const copy = { ...videoUpload };
                    copy.Url = event.target.value;
                    setVideoUpload(copy);
                  }}
                />
              </div>
            </fieldset>
            <button
              className="btn btn-success"
              onClick={(event) => {
                handleSubmitUpload(event);
              }}
            >
              Upload
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UploadVideo;
