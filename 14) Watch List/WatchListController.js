angular.module('watch', [])
.controller('WatchController', function($scope) {
    // Watch count = 2
    $scope.morningGreeting = 'Good morning!';
    $scope.afternoonGreeting = 'Good afternoon!';

    // Watch count = 3 (only one is bound)
    $scope.eveningGreeting = 'Evening!';
    $scope.nightGreeting = 'Sweet Dreams!';

    // Watch count = 7 (4 in the list)
    $scope.otherGreetings = ['Hi', 'Hello',
        'How are you?', 'Watcha doin?'];

    // Watch count = 8
    $scope.customGreeting = 'Have a good day!';

    // Watch count = 9
    $scope.customGreetingCounter = 0;

    // Watch count = 10 (user defined watch)
    $scope.$watch('customGreeting', function() {
        $scope.customGreetingCounter++;
    })
});
