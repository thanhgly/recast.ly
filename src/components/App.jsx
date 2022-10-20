import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import {API_KEY, YOUTUBE_API_KEY} from '/src/config/config.js';


const { useState } = React;





var App = (props) => {

  const [videoData, setVideoData] = useState(exampleVideoData);

  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);

  const clickHandler = (video) => {
    console.log('clicked');
    return (setSelectedVideo(video));
  };
  var data = exampleVideoData;

  return (
    <>
      <VideoPlayer video={selectedVideo} />
      <VideoList videos={videoData} clickHandler={clickHandler} />
    </>
  );
};


// <div>
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <div><h5><em>search</em> view goes here</h5></div>
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <div><h5><em>videoPlayer</em> view goes here</h5></div>
//     </div>
//     <div className="col-md-5">
//       <div><h5><em>videoList</em> view goes here</h5></div>
//     </div>
//   </div>
// </div>
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
