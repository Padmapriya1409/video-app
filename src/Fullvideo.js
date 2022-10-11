import React, { useEffect, useLayoutEffect, useState } from "react";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoArr, setVideoArr] = useState(() => {
    var saved = localStorage.getItem("videoData");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
});

useEffect(() => {
  const item = JSON.parse(localStorage.getItem("videoData"));
  setVideoArr(item);
}, []);

useEffect(() => {
    localStorage.setItem("videoData", JSON.stringify(videoArr));
  }, [videoArr]);

  const handleChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(videoUrl);
    let slug;
    if (videoUrl.match(/youtube/g)) {
      slug = videoUrl.substring(videoUrl.indexOf("=") + 1);
      setVideoArr([
        ...videoArr,
        { type: "youtube", url: `https://www.youtube.com/embed/${slug}` }
      ]);
    } else {
      slug = videoUrl.substring(videoUrl.lastIndexOf("/") + 1);
      setVideoArr([
        ...videoArr,
        { type: "vimeo", url: `https://player.vimeo.com/video/${slug}` }
      ]);
    }
    setVideoUrl("");
  };

  console.log(videoArr);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Paste video URL"
          onChange={handleChange}
          value={videoUrl}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      {!videoArr && <h1>Paste video url</h1>}
      {videoArr &&
        videoArr.map((d) => {
          return (
            <>
              <h2>{d.type}</h2>
              <iframe
                width="560"
                height="315"
                src={d.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </>
          );
        })}
    </div>
  );
};

export default App;
