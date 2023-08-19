import { YOUTUBE_API_KEY } from '../config/config.js';
import fetchDetails from '../lib/fetchVideoContent.js';
const { useState, useEffect } = React;

const VideoDetails = ({ video }) => {
  const [details, setDetails] = useState('');
  const [show, setShow] = useState(false);
  const id = video.id.videoId;

  useEffect(() => {
    fetchDetails(id, (details) => {
      setDetails(details);
    });
  }, [video]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show Details</button>
      {show && <p>{JSON.stringify(details)}</p>}
    </div>
  );
};

export default VideoDetails;
