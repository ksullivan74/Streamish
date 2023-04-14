import React from "react";
import { Card, CardBody } from "reactstrap";

const Video = ({ video }) => {
  return (
    <Card>
      <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
      <CardBody>
        <iframe
          className="video"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <h4>TITLE:</h4>
        <p>
          <strong>{video.title}</strong>
        </p>
        <p>{video.description}</p>
        <h4>COMMENTS:</h4>
        <p>
          {video.comments.map((comment) => (
            <li>{comment.message}</li>
          ))}
        </p>
      </CardBody>
    </Card>
  );
};

export default Video;
