angular.module('applyFunction', [])
.controller('ApplyFunctionController', function($scope, $timeout) {
    $scope.message = 'Original message';

    $timeout(function() {
       $scope.message = 'Updated message!';
    }, 3000);

    $scope.anotherMessage = 'Original message';
    $scope.clickMe = function() {
        $scope.anotherMessage = 'Updated message!';
    };
});
