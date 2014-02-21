// Declare app level module which depends on filters, and services
var app =angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/index',
                controller: HomeCtrl
            }).
            when('/blog', {
                templateUrl: 'partials/blog',
                controller: BlogCtrl
            }).
            when('/blog/addPost', {
                templateUrl: 'partials/blog/addPost',
                controller: AddPostCtrl
            }).
                when('/blog/readPost/:id', {
                templateUrl: 'partials/blog/readPost',
                controller: ReadPostCtrl
            }).
            when('/blog/editPost/:id', {
                templateUrl: 'partials/blog/editPost',
                controller: EditPostCtrl
            }).
            when('/blog/deletePost/:id', {
                templateUrl: 'partials/blog/deletePost',
                controller: DeletePostCtrl
            }).
            when('/about',
            {
                templateUrl: 'partials/about',
                controller: AboutCtrl
            }).
            when('/contact',
            {
                templateUrl: 'partials/contact',
                controller: ContactCtrl
            }).
            otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    }]);


