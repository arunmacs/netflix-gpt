import React from "react";

const VideoBgContainer = ({ videoId }) => {
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0&controls=0&autohide=1&rel=0&frameborder=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div> 
  );
};

export default VideoBgContainer;
