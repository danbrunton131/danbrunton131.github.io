var app = angular.module('myApp', []);

/*
app.controller('myCtr', function($scope, $http) {
	$http.get("https://www.api.openweathermap.org/data/2.5/weather?id=cae5407500f315309428a8fa2908cb66&q=Burlington,ca")
		.then(function(response) {
			$scope.weather = reponse.data;
	});
	$scope.name = "Fred";
});*/


app.controller('myCtr', function($scope, $http) {
	$scope.weather = 'hello';
	$http({
		method: 'GET',
		//url: '/https://www.api.openweathermap.org/data/2.5/weather?q=London,uk'
		url: 'http://api.openweathermap.org/data/2.5/forecast?q=Burlington,ca&APPID=cae5407500f315309428a8fa2908cb66'
		//url: 'https://pokeapi.co/api/v2/pokemon/1/'
		//params: {user_id: cae5407500f315309428a8fa2908cb66}
	}).then(function successCallback(response) {
		$scope.weather = response.data;
		console.log($scope.weather);
		// this callback will be called asynchronously
		// when the response is availabl
		$scope.weather = response.data.list[0].main.temp;
		$scope.weather = $scope.weather - 273.15;
		$scope.weather = Math.round($scope.weather);
	}, function errorCallback(response) {
		// called asynchronouosly if an error occurs
		// or server returns response with an error status.
		console.log('error');
	});
});

/*
app.controller('myCtr', function($scope, $http) {
	$http.get("https://www.api.openweathermap.org/data/2.5/weather?id=cae5407500f315309428a8fa2908cb66&q=London,uk")
		.then(function(response) {
			$scope.weather = reponse.data;
	});
	$scope.name = "Fred";
});*/

/*
app.controller("myCtr", function($scope, $http) {
	$http.get('http://rest-service.guides.spring.io/greeting').then(function(response) {
		$scope.weather = response.data;
	});
});*/