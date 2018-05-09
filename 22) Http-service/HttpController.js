var httpApp = angular.module('http', []);

httpApp.controller('HttpController', function($scope, $http) {
    $http.get("HelloWorld.html")
        .then(function(response) {
            $scope.data = response.data;
            $scope.headers = response.headers;
            $scope.status = response.status;
            $scope.statusText = response.statusText;
            $scope.config = response.config;
        });

    $http({
            method: 'GET',
            url: "NonExistent.html"
        })
        .then(function(response) {
            $scope.data = response.data;
        }, function(response) {
            $scope.errordata = response.data;
            $scope.errorheaders = response.headers;
            $scope.errorstatus = response.status;
            $scope.errorstatusText = response.statusText;
            $scope.errorconfig = response.config;
        });

    $http.get("data.txt")
        .then(function(response) {
            $scope.teachers = response.data;
        });

});
