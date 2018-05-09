angular.module('applyFunction', [])
.controller('ApplyFunctionController', function($scope) {
    $scope.message = 'Original message';

    setTimeout(function() {
       $scope.$apply(function() {
           $scope.message = 'Updated message!';
       });
    }, 3000);

    $scope.anotherMessage = 'Original message';

    var buttonEl = document.getElementById('clickMe');
    buttonEl.addEventListener('click', function() {
        $scope.$apply(function() {
            $scope.anotherMessage = 'Updated message!';
        });
    });
});
