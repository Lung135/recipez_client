var app = angular.module('mp4', ['ngRoute', 'RecipEZControllers', 'RecipEZServices']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  }).
  when('/search', {
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController',
    resolve: ['$location', 'auth', function ($location, auth) {
      if(auth.isLoggedIn())
        $location.path('/home');
    }]
  }).
  when('/signup', {
    templateUrl: 'partials/signup.html',
    controller: 'SignUpController',
    resolve: ['$location', 'auth', function ($location, auth) {
      if(auth.isLoggedIn())
        $location.path('/home');
    }]
  }).
  when('/settings', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController',
    resolve: ['$location', 'auth', function ($location, auth) {
      if(!auth.isLoggedIn())
        $location.path('/login');
    }]
  }).
  when('/profile', {
    templateUrl: 'partials/profile.html',
    controller: 'ProfileController',
    resolve: ['$location', 'auth', function ($location, auth) {
      if(!auth.isLoggedIn())
        $location.path('/login');
    }]
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
