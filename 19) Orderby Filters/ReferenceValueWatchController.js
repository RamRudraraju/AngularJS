angular.module('watch', [])
.controller('ExploringWatchController', function($scope) {
    $scope.simpleWatch = 'Harry Potter';
    $scope.simpleWatchCounter = -1;
    $scope.$watch('simpleWatch', function() {
        $scope.simpleWatchCounter++;
    });

    $scope.valueChangedWatch = 'Hermione Granger';
    $scope.valueChangedWatchCounter = 0;
    $scope.$watch('valueChangedWatch', function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }
        $scope.valueChangedWatchCounter++;
    });

    $scope.objectReferenceWatch = {name: 'Ronald Weasley'};
    $scope.objectReferenceWatchCounter = 0;
    $scope.$watch('objectReferenceWatch', function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }
        $scope.objectReferenceWatchCounter++;
    });

    $scope.objectValueWatch = {name: 'Albus Dumbledore'};
    $scope.objectValueWatchCounter = 0;
    $scope.$watch('objectValueWatch', function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }
        $scope.objectValueWatchCounter++;
    }, true);

    $scope.collectionWatch = ['Harry', 'Hermione', 'Ron', 'Albus'];
    $scope.collectionWatchCounter = 0;
    $scope.$watchCollection('collectionWatch', function(oldValue, newValue) {
        if (oldValue == newValue) {
            return;
        }
        $scope.collectionWatchCounter++;
    });
});
