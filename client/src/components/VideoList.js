import React, { useEffect, useState } from "react";
import Video from "./Video";
import { getAllVideos } from "../modules/videoManager";
import SearchVideosForm from "./SearchVideoForm";
import UploadVideo from "./VideoForm";

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = () => {
    getAllVideos().then((videos) => setVideos(videos));
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="container">
      <SearchVideosForm setVideos={setVideos} />
      <UploadVideo setVideos={setVideos} />
      <div className="row justify-content-center">
        {videos.map((video) => (
          <Video video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
