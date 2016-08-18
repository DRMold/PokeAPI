(function() {

	var TeamBarController = function($scope) {
		$scope.team = [];

		$scope.addTeam = function(id) {
			$http.get("http://pokeapi.co/api/v2/" + id)
			.then(function(response) {
				if($scope.team.length <== 6) { 
					$scope.team.push(response.data);
				}
				else {
					// TODO: tell user they can't add one more..
				}
			},
			function(xhr, status, err) {
				alert(err.message);
			})
			
		};

		// $scope.updateTeam = function() {

		// };

		$scope.removeTeam = function(id, index) {
			if($scope.team.length >== 1) { 
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


	};
	
}());