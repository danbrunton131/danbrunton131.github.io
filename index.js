var app = angular.module('myApp', []);

app.controller('myCtr', function($scope, $http) {
	$scope.weather = 'hello';
	$http({
		method: 'GET',
		//url: '/https://www.api.openweathermap.org/data/2.5/weather?q=London,uk'
		url: 'https://api.openweathermap.org/data/2.5/forecast?q=Burlington,ca&APPID=cae5407500f315309428a8fa2908cb66'
		//params: {user_id: cae5407500f315309428a8fa2908cb66}
	}).then(function successCallback(response) {
		$scope.weather = response.data;
		console.log($scope.weather);

		$scope.date = response.data.list[0].dt_txt;
		console.log($scope.date);

		// this callback will be called asynchronously
		// when the response is available

		// I believe this isn't right now. It is a forecast in a couple of hours.
		$scope.weather = response.data.list[0].main.temp;
		$scope.weather = $scope.weather - 273.15;
		$scope.weather = Math.round($scope.weather);

		$scope.windspeed = response.data.list[0].wind.speed;

		$scope.conditions = response.data.list[0].weather[0].description;


	}, function errorCallback(response) {
		// called asynchronouosly if an error occurs
		// or server returns response with an error status.
		console.log('error');
	});
});