"use strict";

angular.module("hobbitModule").controller("CompanionshipController", ["$scope", "companionship", '$http', '$templateCache', function ($scope, companionship, $http, $templateCache) {
    $scope.companions = companionship;
    $scope.method = 'GET';
    $scope.url = '/Angular/InitialData2';


    $scope.ClearCompanions = function () {
        $scope.companions = "";
    };

    $scope.RepopulateCompanions = function () {
        $scope.code = null;
        $scope.response = null;

        $http({ method: $scope.method, url: $scope.url, cache: $templateCache }).
          success(function (data, status) {
              $scope.status = status;
              $scope.data = data;
          }).
          error(function (data, status) {
              $scope.data = data || "Request failed";
              $scope.status = status;
          });
    };


}]);
