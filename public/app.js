var app = angular.module('ptriangle', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/layout.html',
        controller: 'ptriangleController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);
