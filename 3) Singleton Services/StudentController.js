var studentsApp = angular.module('students', ['studentService']);
  
// All the THREE Controllers Dependes on the Same Service. 

studentsApp.controller('GirlController',
    // This order matches the order of the arguments in the controller
    ['$scope', 'StudentService', function($scope, ss) { 
    // This Controller Dependes on Two things: $scope & StudentService They are Injected.
    // into the Controller Constrctor Function.  // Order Have to Match.
        $scope.girl = '';

        $scope.addGirl = function() {
            ss.addStudent($scope.girl)
        };
    }]
);

studentsApp.controller('BoyController',
    ['$scope', 'StudentService', function($scope, ss) {
        $scope.boy = '';

        $scope.addBoy = function() {
            ss.addStudent($scope.boy)
        };
    }]
);

studentsApp.controller('DisplayController',
    ['$scope', 'StudentService', function($scope, ss) {
        $scope.displayStudents = function() {
            ss.displayStudents();
        };
    }]
);

