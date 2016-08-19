(function() {
  var pokeController = function ($scope, pokeService, teamService) {
    // pokeService.getPokemon().success(function(data) {
    //     console.log("Data recieved!");
    //     $scope.data = data;
    //   }).error(function(err) {
    //     console.log(err);
    //   });

      $scope.add = function() {
        if ($scope.data)
          teamService.addToTeam($scope.data.id);//.success(function() {
        //   console.log("Success?");
        // }).error(function() {
        // console.log("Error?");
        // });
    }

    $scope.$on('pokeDisplay', function(event, response) {
      console.log(response.data);
      $scope.data = response.data;
      $scope.data.name = $scope.data.name[0].toUpperCase() + $scope.data.name.slice(1);
		});
  }

  pokeController.$inject = ['$scope', 'pokeService', 'teamService'];
  angular.module('myPokeApp').controller('pokeController', pokeController);
}());
