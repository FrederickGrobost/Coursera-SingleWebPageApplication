(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.evaluateLunch = function ()
  {
    $scope.result = "";

    if($scope.listOfLunch)
    {
      var splittedLunch = ($scope.listOfLunch).split(',');
      if(splittedLunch.length <= 3)
      {
        $scope.result = 'Enjoy!';
      } else {
        $scope.result = 'Too much!';
      }
    } else {
      $scope.result = "Please enter data first";
    }
  };

}

})();
