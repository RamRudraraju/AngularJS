
var scopeInheritanceApp = angular.module('scopeInheritance', []);

scopeInheritanceApp.controller('GreatGrandfatherController',
    ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.name = 'Great-grandfather Joe';
    $scope.anotherName = 'Great-grandmother Emily';
    $rootScope.sameName = 'Random Uncle';
}]);

scopeInheritanceApp.controller('GrandfatherController',
    ['$rootScope', '$scope', function($rootScope, $scope) {
        $scope.name = 'Grandfather Kevin';
}]);

scopeInheritanceApp.controller('FatherController',
    ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.name = 'Father Jim';
}]);

scopeInheritanceApp.controller('Child',
    ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.name = 'Child Sarah';
}]);
