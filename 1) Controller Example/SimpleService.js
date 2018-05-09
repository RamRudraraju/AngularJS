angular.module('calculatorService', [])   // Module Declarartion
    .factory('CalcService', function() {  // Setting Up a Service Inside the Model  by using ".factor"  ( registering a Service. )
        var add = function(num1, num2) {  
            return num1 + num2;
        };

        var multiply = function(num1, num2) {
            return num1 * num2;
        };

        var divide = function(num1, num2) {
            return num1 / num2;
        };

        var subtract = function(num1, num2) {
            return num1 - num2;
        };

       return {                           // Returning a Object.
            add: add,
            multiply: multiply,
            divide: divide,
            subtract: subtract
        }; 
    });
