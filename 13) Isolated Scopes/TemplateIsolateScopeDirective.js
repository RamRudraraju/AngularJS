var candidateApp = angular.module('candidates', []);

candidateApp
.controller('CandidateController', ['$scope', function($scope) {
    $scope.donald = {
      name: 'Donald Trump',
      party: 'Republican',
      spouse: 'Melania Trump'
    };
    
    $scope.hillary = {
        name: 'Hillary Clinton',
        party: 'Democrat',
        spouse: 'Bill Clinton'
    };
}])
.directive('presidentialCandidate', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=candidateInfo',   // Wiring on the JavaScript Side.
            candidateInfo: '='
        },
        template: 'Name: {{info.name}} ({{info.party}}) Spouse: {{candidateInfo.spouse}}'
    };
});

var button = document.getElementById('clickMe');

function buttonClicked () {
    alert('the button was clicked');
}

button.addEventListener('click', buttonClicked);

function timerComplete () {
    alert('timer complete');
}

setTimeout(timerComplete, 2000);