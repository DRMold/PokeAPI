app.service("pokeService", ["$http", function($http) {
  var vm = this;

  vm.getPokemon = function(id) {
    return $http.get("http://pokeapi.co/api/v2/pokemon/" + id);
  }

  vm.getAllPokemon = function() {
  	return;
  }

}]);
