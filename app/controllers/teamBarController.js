(function() {

	var TeamBarController = function($scope, $window, pokeService) {
		$scope.team = [];
		$scope.nTeam = 0;

		

		$scope.addTeam = function(id) {
			var index = $scope.nTeam++;

			if($scope.nTeam <= 6) {
				pokeService.getPokemon(id)
				.then(function(response) {
					$scope.team[index] = response.data;
					$scope.team[index].index = index;
				},
				function(error) {
					console.log("Failed to retrieve pokemon, " + id);
				})
			}
			else {
				console.log("Failed to add pokemon, ", id, ", team already full")
			}
			
			
		};

		$scope.removeTeam = function(index) {
			if($scope.team[index] !== undefined) {
				if($scope.team.length >= 1) {
					// shift team over by one
					for(var i=index; i < $scope.nTeam - 1; i++) {
						$scope.team[i] = $scope.team[i + 1];
						$scope.team[i].index = i;
					}

					// delete last pokemon
					$scope.team[$scope.nTeam - 1] = undefined;
					$scope.nTeam--;

					console.log($scope.team);
					
					
				}
				else {
					// TODO: tell user they can't remove one more..
				}
			}
		};

		$scope.clearTeam = function() {
			$scope.team = [];
			$scope.team[5] = undefined;

			$scope.nTeam = 0;
		};

		function init() {
			$scope.team[5] = undefined;

			$scope.addTeam(1);
			$scope.addTeam(2);
			$scope.addTeam(3);
			$scope.addTeam(4);
			$scope.addTeam(5);
			$scope.addTeam(6);
		};

		init();

		// TODO: figure out how to link to member info
	};

	TeamBarController.$inject = ['$scope', '$window', 'pokeService'];
    angular.module('myPokeApp').controller('TeamBarController', TeamBarController);
	
}());