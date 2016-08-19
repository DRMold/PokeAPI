(function() {
  var pokeController = function ($scope, pokeService, teamService) {
    pokeService.getPokemon().success(function(data) {
        console.log("Data recieved!");
        $scope.data = data;
      }).error(function(err) {
        console.log(err);
      });

      var add = function() {
        teamService.addToTeam(12).success(function() {
          console.log("Success?");
        }).error(function() {
        console.log("Error?");
        });
    }
  }

  pokeController.$inject = ['$scope', 'pokeService', 'teamService'];
  angular.module('myPokeApp').controller('pokeController', pokeController);
}());
