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

  app.factory('AttractionFactory', function() {
    return {
      getAttractions: function() {
        return [
          {
            Name: 'Space Mountain'
          }, {
            Name: 'Ariel'
          }, {
            Name: 'Star Tours'
          }
        ];
      }
    };
  });

  app.controller('AttractionCtrl', [
    '$scope', 'AttractionFactory', function($scope, factory) {
      return $scope.Attraction = factory.getAttractions();
    }
  ]);

}).call(this);
