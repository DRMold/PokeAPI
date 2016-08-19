app.service("teamService", ["$rootScope", "pokeService", function($rootScope, pokeService) {
  var vm = this;
  var team=[];
  team[5] = undefined;
  var nTeam=0;

  vm.addToTeam = function(id) {
    console.log("Service Fired!"+id);
    if(nTeam <= 5) {
      var index = nTeam++;
      pokeService.getPokemon(id)
      .then(function(response) {
        team[index] = response.data;
        team[index].index = index;

        $rootScope.$broadcast('addedToTeam', team);
        console.log("Broadcast 1 Fired!");
      },
      function(error) {
        console.log("Failed to retrieve pokemon, " + id);
      })
    }
    else {
      console.log("Failed to add pokemon, ", id, ", team already full")
    }
  };

  vm.removeFromTeam = function(index) {
    if(team[index] !== undefined) {
      if(team.length >= 1) {
        // shift team over by one
        for(var i=index; i < nTeam - 1; i++) {
          team[i] = team[i + 1];
          team[i].index = i;
        }

        // delete last pokemon
        team[nTeam - 1] = undefined;
        nTeam--;

        console.log('Removed mon: '+ $nTeam);

        $rootScope.$broadcast('removedFromTeam', team);
        console.log("Broadcast 2 Fired!");
      }
      else {
        // TODO: tell user they can't remove one more..
      }
    }
  };

  vm.clearTeam = function() {
    team = [];
    team[5] = undefined;

    nTeam = 0;

    $rootScope.$broadcast('clearedTeam', team);
    console.log("Broadcast 3 Fired!");
  };
}]);
