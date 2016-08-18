app.controller("pokeController", ["$scope", "pokeService", function($scope, pokeService) {
  pokeService.getPokemon().success(function(data) {
    console.log("Data recieved!");
    $scope.data = data;
  }).error(function(err) {
    console.log(err);
  });
}]);
