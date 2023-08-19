import data from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoDetails from './VideoDetails.js';
import search from '../lib/searchYoutube.js';
const { useState, useEffect } = React;

var App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(videos[0] || data[0]);

  const fetchVideos = (query = '') => {
    search(query, (results) => {
      setVideos(results);
      setVideo(results[0]);
    });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // if (!videos || !video) {
  //   return <h1>Loading</h1>;
  // }

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search fetchVideos={fetchVideos} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video} />
          <VideoDetails video={video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setVideo={setVideo} />
        </div>
      </div>
    </div>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
