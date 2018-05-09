
angular.module('filters', [])
.controller('BuiltInFiltersController', function($scope, orderByFilter) {
    $scope.examReport = [
        {name: 'Hermione', marks: 100},
        {name: 'Ron', marks: 55},
        {name: 'Harry', marks: 75},
        {name: 'Neville', marks: 40}
    ];

    $scope.sortedExamReport = orderByFilter($scope.examReport, 'marks', true);

    $scope.pairList = [
        {first: 3, second: 5},
        {first: 10, second: 25},
        {first: 1, second: 2},
        {first: 1, second: 1},
        {first: 1, second: 100},
        {first: 55, second: 25}
    ];

    $scope.pairComparator = function(p1, p2) {
        // If we don't get numbers, just compare by index
        if (p1.type !== 'number' || p2.type !== 'number') {
            return (p1.index < p2.index) ? -1 : 1;
        }

        return (p1.value < p2.value) ? -1 : 1;
    };
});
