var routingApp = angular.module('routing', ["ngRoute"]);

routingApp.config(function($routeProvider) {
    $routeProvider
        .when("/red", {
            templateUrl : "Red.html"
        })
        .when("/green", {
            templateUrl : "Green.html"
        })
        .when("/blue", {
            templateUrl : "Blue.html"
        })
        .when("/yellow", {
            templateUrl : "Yellow.html",
            controller : "YellowRoutingController"
        })
        .otherwise({
            template : "<div class='inner-box'>No selection</div>"
        });
});
routingApp.controller('RoutingController', function($scope) {
});
routingApp.controller('YellowRoutingController', function($scope) {
    $scope.hello = "Hello!";
});
