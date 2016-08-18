(function() {

	var TeamBarController = function($scope, pokeService) {
		$scope.team = [];

		$scope.addTeam = function(id) {
			if($scope.team.length <= 6) {
				pokeService.getPokemon(id)
				.then(function(response) {
					$scope.team.push(response.data);
				},
				function(xhr, status, err) {
					alert(err.message);
				})
			}
			else {
				// TODO: tell user they can't add one more..
			}
			
			
		};

		// $scope.updateTeam = function() {

		// };

		$scope.removeTeam = function(index) {
			if($scope.team.length >= 1) { 
				$scope.team.splice(index, 1);
			}
			else {
				// TODO: tell user they can't remove one more..
			}
		};

		$scope.clearTeam = function() {
			$scope.team = [];
		};

		// TODO: figure out how to link to member info

		$scope.addTeam(1);
		$scope.addTeam(2);
		$scope.addTeam(3);
		$scope.addTeam(4);
		$scope.addTeam(5);
		$scope.addTeam(6);
	};

	TeamBarController.$inject = ['$scope', 'pokeService'];
    angular.module('myPokeApp').controller('TeamBarController', TeamBarController);
	
}());