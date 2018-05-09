var simpleScopeApp = angular.module('simpleScope', []);

simpleScopeApp.controller('SimpleScopeController1', ['$scope', function($scope) {
    
        $scope.randomPeople = [
            'Swetha',
            'Janani',
            'Vitthal',
            'Navdeep',
            'Pradeep',
            'Jitu',
            'Shreya',
            'Nirali'
        ];
// Observe the Difference Between Both of them "Person"
        this.person = 'Vitthal';    // To Access this we Need to Specify the COntroller Object
        $scope.person = 'Janani';   // Here the Controller Object is Not Necessary, Because of $scope. 
                                    // It will know the Corresponding Scope.

        this.randomPersonOnController = function() {  // Function on the Contrroller Object 
            this.person = $scope.randomPeople[Math.floor(Math.random() * 8)];
        };

        $scope.randomPersonOnScope = function() {     // Function on the Scope Object 
            $scope.person = $scope.randomPeople[Math.floor(Math.random() * 8)];
        };

    }]);

simpleScopeApp.controller('SimpleScopeController2', ['$scope', function($scope) {
    
    $scope.randomPeople = [
        'Jim',
        'John',
        'Emily',
        'Nina',
        'Adam',
        'Alan',
        'Olga',
        'Sarah'
    ];

    this.person = 'Emily';
    $scope.person = 'Sarah';

    this.randomPersonOnController = function() {    // Function on the Contrroller Object 
        this.person = $scope.randomPeople[Math.floor(Math.random() * 8)];
    };

    $scope.randomPersonOnScope = function() {     // Function on the Scope Object 
        $scope.person = $scope.randomPeople[Math.floor(Math.random() * 8)];
    };

}]);
