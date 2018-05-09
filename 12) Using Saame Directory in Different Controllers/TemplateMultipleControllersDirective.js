var candidateApp = angular.module('candidates', []);

candidateApp
.controller('DonaldController', ['$scope', function($scope) {
    $scope.candidate = {
        name: 'Donald Trump',
        party: 'Republican',
        spouse: 'Melania Trump'
    };
}])
.controller('HillaryController', ['$scope', function($scope) {
    $scope.candidate = {
        name: 'Hillary Clinton',
        party: 'Democrat',
        spouse: 'Bill Clinton'
    };
}])
.directive('ramaCandidate', function() {
    return {
        template: 'Name: {{candidate.name}} ({{candidate.party}}) Spouse: {{candidate.spouse}}'
    };
});
