'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://crackling-fire-853.firebaseio.com/posts/:id.json');
});