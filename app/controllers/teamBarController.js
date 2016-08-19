(function() {

	var TeamBarController = function($scope, $window, pokeService, teamService) {
		$scope.team = [];
		$scope.nTeam = 0;

		$scope.removeTeam = function(index) {
			teamService.removeFromTeam(index);
		};

		$scope.$on('addedToTeam', function(event, team) {
				//teamService.addToTeam(id);
				$scope.team=team;
				console.log("Broadcast 1 recieved!"+$scope.team);
		});

		$scope.$on('removedFromTeam', function(event, team) {
				//teamService.addToTeam(id);
				$scope.team=team;
				console.log("Broadcast 2 recieved!");
		});

		$scope.$on('clearedTeam', function(event, team) {
				//teamService.addToTeam(id);
				$scope.team=team;
				console.log("Broadcast 3 recieved!");
		});

		function init() {
			$scope.team[5] = undefined;

			// $scope.addTeam(1);
			// $scope.addTeam(2);
			// $scope.addTeam(3);
			// $scope.addTeam(4);
			// $scope.addTeam(5);
			// $scope.addTeam(6);
		};

		init();

		// TODO: figure out how to link to member info
	}

	TeamBarController.$inject = ['$scope', '$window', 'pokeService', 'teamService'];
    angular.module('myPokeApp').controller('TeamBarController', TeamBarController);

}());
