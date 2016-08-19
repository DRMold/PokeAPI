(function() {
  var pokeController = function ($scope, pokeService, teamService) {
    // pokeService.getPokemon().success(function(data) {
    //     console.log("Data recieved!");
    //     $scope.data = data;
    //   }).error(function(err) {
    //     console.log(err);
    //   });

      $scope.add = function() {
        teamService.addToTeam(150);//.success(function() {
        //   console.log("Success?");
        // }).error(function() {
        // console.log("Error?");
        // });
    }

    $scope.$on('pokeDisplay', function(event, response) {
      console.log(response.data);
      var displayName = response.data.name;
      displayName = displayName[0].toUpperCase() + displayName.slice(1);
      document.getElementById("pokedexName").innerHTML = displayName;
      document.getElementById("pokedexPicture").innerHTML = "";
      var img = document.createElement('img');
      img.src = response.data.sprites.front_default;
      img.width="250px";
      img.height="250px";
      img.style.width="250px";
      img.style.height="250px";
      document.getElementById("pokedexPicture").appendChild(img);
		});
  }

  pokeController.$inject = ['$scope', 'pokeService', 'teamService'];
  angular.module('myPokeApp').controller('pokeController', pokeController);
}());
