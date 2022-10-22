import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import { API_KEY, YOUTUBE_API_KEY } from '/src/config/config.js';
import searchYouTube from '/src/lib/searchYouTube.js';
import Search from './Search.js';

const { useState, useEffect } = React;


var App = (props) => {


  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const [input, setInput] = useState('');

  useEffect(() => {
    searchYouTube(input, (data) => {
      setVideoData(data);
      setSelectedVideo(data[0]);
    });

  }, [input]);


  const clickHandler = (video) => {
    console.log('clicked');
    return (setSelectedVideo(video));
  };

  const handleInput = (e) => {
    e.preventDefault();
    var value = e.target.value;
    console.log(value);
    setInput(value);

  };


  return (


    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search handleInput={handleInput}></Search>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videoData} clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
};

// <>
//   <VideoPlayer video={selectedVideo} />
//   <VideoList videos={videoData} clickHandler={clickHandler} />
// </>

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
