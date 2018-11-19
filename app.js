var app = angular.module('calApp', [])
app.controller("calculatorCtrl", function ($scope) {
    $scope.display = "";
    $scope.math = function (val) {
        $scope.display += val;
    };
    $scope.e = function () {
        $scope.display = eval($scope.display);
    };
    $scope.c = function (val) {
        $scope.display = val;
    }
})