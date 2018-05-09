
var candidateApp = angular.module('candidates', []);

candidateApp
.controller('CandidateController', ['$scope', function($scope) {
    $scope.candidate = {
      name: 'Donald Trump',
      party: 'Republican',
      spouse: 'Melania Trump',
      nextPr: 'Krishna',
      nextPrWife: 'Jennifer Lawrence'
    };
}])
// Step: 1        &&          Step:2           
.directive('rajuCandidate', function() { // directive
    return {
        template: 'Name: {{candidate.name}} ({{candidate.party}}) Spouse: {{candidate.spouse}} Next Presedent: {{candidate.nextPr}} Spouse: {{candidate.nextPrWife}}'
    };
});

