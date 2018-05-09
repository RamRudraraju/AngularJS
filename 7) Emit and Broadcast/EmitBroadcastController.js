
angular.module('emitBroadcast', [])
    .controller('EmitBroadcastController', ['$scope', function($scope) {
        $scope.count = 0;

        $scope.$on('ClickEvent', function() {
            $scope.count++;
        });
    }]);
