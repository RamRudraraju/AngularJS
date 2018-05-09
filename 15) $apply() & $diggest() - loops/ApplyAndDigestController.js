angular.module('applyAndDigest', [])
.controller('ApplyAndDigestController', function($scope) {
$scope.message = 'Original message';

setTimeout(function() {
   $scope.message = 'Updated message (you should not see this!)';
   $scope.$apply();
}, 3000);

$scope.anotherMessage = 'Original message';

var buttonEl = document.getElementById('clickMe');
buttonEl.addEventListener('click', function() {
    $scope.anotherMessage = 'Updated message (you should not see this!)';
    $scope.$apply();
});
});
