app.service("pokeService", ["$http", function($http) {
  var vm = this;

  vm.getPokemon = function(id) {
    console.log(id);
  	return $http({
  		method: 'GET',
  		url: "http://pokeapi.co/api/v2/pokemon/" + id,
  		cache: true
  	});
  }
}]);

//http://pokeapi.kevgriffin.com/api/v2/pokemon/
