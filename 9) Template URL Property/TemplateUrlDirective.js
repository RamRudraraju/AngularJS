var candidateApp = angular.module('candidates', []);
 // Dirctory Holding the Link of the Content.
candidateApp
.controller('CandidateController', ['$scope', function($scope) {
    $scope.candidate = {
        name: 'Donald Trump',
        party: 'Republican',
        spouse: 'Melania Trump'
    };
}])
.directive('kittuCandidate', function() {
    return {
        templateUrl: 'TemplateUrlDirectiveCandidate.html'   // Directory Returning the URL of the Page. 
    };
});

