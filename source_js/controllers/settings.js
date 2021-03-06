angular.module('RecipEZControllers').controller('SettingsController', ['$scope', '$http', '$window', 'auth', function ($scope, $http, $window, auth) {

	$scope.user = auth.currentUser();
	$scope.tags = ['American', 'Italian', 'Chinese', 'Japanese', 'Thai', 'Indian', 'Mexican', 'Other']
	$scope.errorMsgShow = false;
	$scope.errorMsg = "An error has occurred.";

	console.log($scope.user);

	$scope.editUser = function () {
		$scope.user.name;
		$scope.user.email;
		$scope.user.tags;
		
		auth.updateUser($scope.user).success(function (response) {
			auth.setToken(response.token);
			$scope.errorMsg = response.message;
			$scope.showErrorMsg();
		}).error(function (response) {
			$scope.errorMsg = response.message;
			$scope.showErrorMsg();
		});
	};

	$scope.showErrorMsg = function () {
		$scope.errorMsgShow = true;
	};

	$scope.hideErrorMsg = function () {
		$scope.errorMsgShow = false;
	};

}]);
