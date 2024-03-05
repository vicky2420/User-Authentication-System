app.controller('LoginController', function ($scope, $location) {
    $scope.login = function () {
        // Implement login logic here
        $location.path('/dashboard');
    };
});

app.controller('SignupController', function ($scope, $location) {
    $scope.signup = function () {
        // Implement signup logic here
        $location.path('/dashboard');
    };
});

app.controller('DashboardController', function ($scope, $location) {
    // Dashboard logic here
    $scope.logout = function () {
        // Implement logout logic here
        $location.path('/');
    };
});
