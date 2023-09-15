import React from "react";

const VideoGallery = () => {
  return (
    <div className="px-10 bg-slate-200 py-10 mb-16">
      <div className="heading mb-10">
        <h3 className="text-slate-700 text-2xl md:text-4xl font-bold text-center tracking-widest">
          Parents Say About Us
        </h3>
      </div>
      <div className="w-full md:flex justify-between md:space-x-3 space-y-7 md:space-y-0 px-5 md:px-0">
        <iframe
          width="300"
          height="250"
          src="https://www.youtube.com/embed/q54ZEkOdB8k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-3xl w-full"
        ></iframe>
        {/*<iframe
          width="300"
          height="250"
          src="https://www.youtube.com/embed/q54ZEkOdB8k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-3xl w-full"
  ></iframe>*/}
        {/*<iframe
          width="300"
          height="250"
          src="https://www.youtube.com/embed/q54ZEkOdB8k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-3xl w-full"
></iframe>*/}
      </div>
    </div>
  );
};

export default VideoGallery;
