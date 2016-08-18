app.service("pokeService", ["$http", function($http) {
  var vm = this;
  vm.getPokemon = function() {
    return $http.get("http://pokeapi.co/api/v2/pokemon/12");
  }
}]);
