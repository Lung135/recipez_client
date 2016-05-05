angular.module('RecipEZControllers').controller('ProfileController', ['$scope', '$http', '$window', 'auth', 'Search', 'Profile', '$filter', function ($scope, $http, $window, auth, Search, Profile, $filter) {	
	$scope.getProfile = function() {
		Profile.getUserInfo(auth.currentUser()._id).success(function(user){
			Profile.queryRecipes("where={$and: [{tags: {$in:" + JSON.stringify(user.data.tags) + "}},{_id: {$nin:" + JSON.stringify(user.data.recipes) +"}}]}").success(function(data){
				$scope.recommendedRecipes = data.data;
			});

			Profile.queryRecipes("where={_id: {$in:" + JSON.stringify(user.data.recipes) + "}}").success(function(data2){
				$scope.myRecipes = data2.data;
			});

		});
	}

	$scope.getProfile();

	$scope.hoverIn = function() {
		this.hover = true;
	}

	$scope.hoverOut = function() {
		this.hover = false;
	}

	$scope.deleteRecipe = function(recipeid) {
		$http.delete("http://localhost:4000/api/recipes/"+recipeid).success(function(res) {
			console.log(res);
			$scope.getProfile();
		});
	}
}]);
