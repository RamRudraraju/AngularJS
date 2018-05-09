angular.module('simpleForm', [])
.controller('SimpleFormController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(client) {
        $scope.master = angular.copy($scope.client);
    };

    $scope.reset = function() {
        $scope.client = angular.copy($scope.master);
    };
}]);
