angular.module('filters', [])
.controller('FiltersController', function($scope) {
    $scope.books = [
        {name: "Harry Potter And The Philosopher's Stone", location: 'Shelf 9'},
        {name: "Twilight", location: 'Shelf 2'},
        {name: "The Hunger Games", location: 'Shelf 33'},
        {name: "The Count Of Monte Christo", location: 'Shelf 3'},
        {name: "The Moonstone", location: 'Shelf 43'},
        {name: "Atlas Shrugged", location: 'Shelf 22'}
    ];
});
