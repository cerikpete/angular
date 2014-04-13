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

app.factory 'AttractionFactory', ['$http', ($http) ->
	getAttractions: ->		
		$http.get('attractions.json')
			.then (result) -> result.data
]

app.controller 'AttractionCtrl', ['$scope', 'AttractionFactory', ($scope, factory) ->
	factory.getAttractions().then (result) ->
		$scope.Attraction = result
]