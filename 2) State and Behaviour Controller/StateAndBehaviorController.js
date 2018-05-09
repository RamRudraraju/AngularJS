
angular.module('hello', [])
    .controller('HelloController', ['$scope', function($scope) { // $ - Indicates that it is a Buitin Angular Components.
        $scope.entity = 'World';  
 // $scope id Injected into the Function  // To Make sure that The scope of the Corresponding Controller is Inserted into the Function
 // The Advantages in With out the Object Prefix, We can Eassily Refer the variables in the Controller with the View.
        $scope.randomEntities = [
            'Bellandur',
            'Oakland',
            'Universe',
            'Mars',
            'Human'
        ];

        $scope.generateRandomEntity = function() {
            $scope.entity = $scope.randomEntities[Math.floor(Math.random() * 5)];
        };
        $scope.generateSpecificEntity = function(person) {
            $scope.entity = person;
        };

        $scope.customPerson = '';
    }]);
