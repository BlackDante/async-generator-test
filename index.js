const fetch = require('node-fetch');
const co = require('co');

const SERVER_URL = 'https://jsonplaceholder.typicode.com';
const API_CALL_FIRST_POST = '/posts/1';
const API_CALL_FIRST_POST_COMMENTS = '/posts/1/comments';

co(function* () {
  const POST_URI = SERVER_URL + API_CALL_FIRST_POST;
  const COMMENTS_URI = SERVER_URL + API_CALL_FIRST_POST_COMMENTS;

  const post = yield fetch(POST_URI);
  const comments = yield fetch(COMMENTS_URI);

  return {
    post: yield post.json(),
    comments: yield comments.json()
  };
})
.then(response => console.log(response))
.catch(error => console.warn(error));
