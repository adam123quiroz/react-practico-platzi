import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((value) => value.json())
      .then((value) => setVideos(value));
  }, []);

  return videos;
};

export default useInitialState;
