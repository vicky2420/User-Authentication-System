var app = angular.module('authApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'LoginController'
        })
        .when('/signup', {
            templateUrl: 'signup.html',
            controller: 'SignupController'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html',
            controller: 'DashboardController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
