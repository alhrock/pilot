angular.module('pilot')
  .factory('Show', function($resource) {
    return $resource('/api/shows/:_id');
  });
