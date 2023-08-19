const { useState } = React;
var VideoPlayer = ({ video }) => {
  const [autoPlay, setAutoPlay] = useState(false);

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={src + (autoPlay ? '?autoplay=1&mute=1' : '')}
          allowFullScreen
          allow="autoplay; encrypted-media"
        ></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
      <button
        onClick={() => {
          setAutoPlay(!autoPlay);
        }}
      >
        Autoplay: {autoPlay ? 'on' : 'off'}
      </button>
    </div>
  );
};
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
