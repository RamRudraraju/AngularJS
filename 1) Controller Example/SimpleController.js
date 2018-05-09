angular.module('calculator', ['calculatorService'])  // This Module Dependes on "calculatorService" - Module.
    .controller('CalcController', ['CalcService', function(calcService) { // Dependencies 
      // This Controller Is Using a Service(CalcService) in calculatorService Module.
     // CalcService --> Service that this Controller Uses. // It dependes on "calculatorService" - Module // Dependencies. 
        
        this.num1 = 4;
        this.num2 = 2;
               
        // These Functions are Calling "calcService" - To do the Logical Operations. 
        this.add = function() {
            return calcService.add(this.num1, this.num2);
        };

        this.multiply = function() {
            return calcService.multiply(this.num1, this.num2);
        };

        this.divide = function() {
            return calcService.divide(this.num1, this.num2);
        };

        this.subtract = function() {
            return calcService.subtract(this.num1, this.num2);
        };
    }]);
