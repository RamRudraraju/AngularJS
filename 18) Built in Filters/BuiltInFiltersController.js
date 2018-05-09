// BuiltInFiltersController.js

angular.module('filters', [])
    .controller('BuiltInFiltersController', function($scope, orderByFilter) {
        $scope.jsObject = {
            name: 'Harry Potter And The Cursed Child',
            date: '31 July, 2016',
            format: 'script',
            mainCharacters: ['Albus', 'Scorpius', 'Delphi', 'Harry'],
            printRun: 100000000000
        };

        $scope.numbers = [100,200,300,400,500,600,700,800,900];
        $scope.letters = "abcdefghi";
    });
