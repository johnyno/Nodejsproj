/* Controllers */

function IndexCtrl($scope, $http) {
    $http.get('/api/posts').
        success(function(data, status, headers, config) {
            console.log(data.posts);
            $scope.posts = data.posts;
        });
}

function AddPostCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitPost = function () {
        $http.post('/api/post', $scope.form).
            success(function(data) {
                console.log('AddPostCtrl - success');
                $location.path('/');
            });
    };
}

function ReadPostCtrl($scope, $http, $routeParams) {

    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            console.log('ReadPostCtrl - success');
            $scope.post = data.post;
        });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/api/post/' + $routeParams.id).
        success(function(data) {
            $scope.form = data.post;
        });

    $scope.editPost = function () {
        console.log('EditPostCtrl - success');
        $http.put('/api/post/' + $routeParams.id, $scope.form).
            success(function(data) {
                $location.url('/');
                console.log('EditPostCtrl - success');
            });
    };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {

        console.log('DeletePostCtrl - success222');
        $http.delete('/api/delete/' + $routeParams.id).
            success(function(data) {
                console.log('DeletePostCtrl - success');
                $location.url('/');
            });
}

/*
function NavCtrl($scope, $http, $location, $routeParams)
{
        $scope.navClass = function (page) {
            var currentRoute = $location.path().substring(1) || 'home';
            return page === currentRoute ? 'active' : '';
        }
}



*/

function NavCtrl($scope, $location)
{
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
    }
}

function AboutCtrl($scope, $http, $location, $routeParams){
    console.log('inside about controller');
}
function ContactCtrl($scope, $http, $location, $routeParams){
    console.log('inside contact controller');
}
