import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  const url = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  $.get(url, { q: query }, (data) => {
    callback(data);
  });
};

export default searchYouTube;
