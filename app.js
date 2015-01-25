

var app = angular.module("MyApp", []);

app.controller("MyAppController", function($scope){

  $scope.greeting = "Hello AngularJS peeps!";
  $scope.color = "#a1a1a1";
  $scope.borderColor = "#000000";
  $scope.borderThickness = 2;
  $scope.borderRadius = 0;
  $scope.boxWidth = 200;
  $scope.boxHeight = 150;

  $scope.buttonClicked = function() {
    $scope.color = "";
    $scope.borderColor = "";
    $scope.borderThickness = 3;
    $scope.borderRadius = "5";
    $scope.boxWidth = 100;
    $scope.boxHeight = 50;
  }

});



