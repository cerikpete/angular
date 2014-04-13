app = angular.module 'parkApp', ['ngRoute']
app.config ['$routeProvider', ($routeProvider) ->
	$routeProvider
		.when '/',
			controller: 'AttractionCtrl',
			templateUrl:'views/attractions.html'
		.when '/parks',
			templateUrl:'views/parks.html'		
		.otherwise
			redirectTo: '/'
]

app.factory 'AttractionFactory', ->
	getAttractions: ->
		return [{ Name: 'Space Mountain' }, { Name: 'Ariel' }, { Name: 'Star Tours' }]

app.controller 'AttractionCtrl', ['$scope', 'AttractionFactory', ($scope, factory) ->
	$scope.Attraction = factory.getAttractions();	
]