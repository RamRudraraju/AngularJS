var candidateApp = angular.module('candidates', []);

candidateApp
.controller('CandidateController', ['$scope', function($scope) {
    $scope.candidate = {
        name: 'Donald Trump',
        party: 'Republican',
        spouse: 'Melania Trump'
    };
}])
.directive('kittuDirectory', function() {
    return {
        templateUrl: function(element, attribute) {
            return 'TemplateUrlFunctionDirective-' + attribute.about + '.html'
        }
    };
});
