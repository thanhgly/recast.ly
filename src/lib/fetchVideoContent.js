import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('Authorization', API_KEY);
// });

var fetchVideoContent = (id = 'Ks-_Mh1QhMc', callback) => {
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails%2C%20topicDetails&id=${id}&key=${YOUTUBE_API_KEY}`;
  $.get(url, (data) => {
    callback(data.items[0]);
  }).fail((err) => {
    console.error('fetch failed', `endpoint: ${url}`, `query: ${id}`);
  });
};

export default fetchVideoContent;
