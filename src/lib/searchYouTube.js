import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});




var searchYouTube = (query, callback) => {



  // TODO

  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,

    },
    success: (data) => {
      console.log('Successful Fetch');
      console.log(data, 'data');
      console.log('callBack called');
      callback(data);

    },
    error: function(response) {
      console.log('Request Failed');
    }
  });


};





export default searchYouTube;
