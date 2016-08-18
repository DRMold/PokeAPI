app.service("pokeService", ["$http", function($http) {
  var vm = this;

  vm.getPokemon = function(id) {
  	return $http({
		method: 'GET',
		url: "http://pokeapi.co/api/v2/pokemon/" + id,
		cache: true
	});
  }

  vm.getAllPokemon = function() {
  	return;
  }

}]);
