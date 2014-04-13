(function() {
  var app;



  app = angular.module('parkApp', ['ngRoute']);

  app.config([
    '$routeProvider', function($routeProvider) {
      return $routeProvider.when('/', {
        controller: 'AttractionCtrl',
        templateUrl: 'views/attractions.html'
      }).when('/parks', {
        templateUrl: 'views/parks.html'
      }).otherwise({
        redirectTo: '/'
      });
    }
  ]);

  app.factory('AttractionFactory', [
    '$http', function($http) {
      return {
        getAttractions: function() {
          return $http.get('attractions.json').then(function(result) {
            return result.data;
          });
        }
      };
    }
  ]);

  app.controller('AttractionCtrl', [
    '$scope', 'AttractionFactory', function($scope, factory) {
      return factory.getAttractions().then(function(result) {
        return $scope.Attraction = result;
      });
    }
  ]);

}).call(this);
