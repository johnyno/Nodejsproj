/* Controllers */

function HomeCtrl($scope, $http) {
    $http.get('/blogAPI/posts').
        success(function(data, status, headers, config) {
           //
        });
}


function BlogCtrl($scope, $http) {
    $http.get('/blogAPI/posts').
        success(function(data, status, headers, config) {
            console.log('BlogCtrl - success');
            $scope.posts = data.posts;
        });
}

function AddPostCtrl($scope, $http, $location) {
    $scope.form = {};
    $scope.submitPost = function () {
        $http.post('/blogAPI/post', $scope.form).
            success(function(data) {
                console.log('AddPostCtrl - success');
                $location.path('/blog');
            });
    };
}

function ReadPostCtrl($scope, $http, $routeParams) {

    $http.get('/blogAPI/post/' + $routeParams.id).
        success(function(data) {
            console.log('ReadPostCtrl - success');
            $scope.post = data.post;
        });
}

function EditPostCtrl($scope, $http, $location, $routeParams) {
    $scope.form = {};
    $http.get('/blogAPI/post/' + $routeParams.id).
        success(function(data) {
            $scope.form = data.post;
        });

    $scope.editPost = function () {
        console.log('EditPostCtrl - success');
        $http.put('/blogAPI/post/' + $routeParams.id, $scope.form).
            success(function(data) {
                $location.url('/blog');
                console.log('EditPostCtrl - success');
            });
    };
}

function DeletePostCtrl($scope, $http, $location, $routeParams) {

    console.log('DeletePostCtrl - success');
    $http.delete('/blogAPI/delete/' + $routeParams.id).
        success(function(data) {
            console.log('DeletePostCtrl - success');
            $location.url('/blog');
        });
}





function NavCtrl($scope, $location)
{
    $scope.navClass = function (page) {
        //do thomething OnNavigation
        //var currentRoute = $location.path().substring(1) || 'home';

        //console.log('NavCtrl navigates to:' +  currentRoute);
        //return page === currentRoute ? 'active' : '';
    }
}

function AboutCtrl($scope, $http, $location, $routeParams){
    console.log('inside about controller');
}
function ContactCtrl($scope, $http, $location, $routeParams){
    var formData = {
        firstname: "default",
        emailaddress: "default",
        contactcontent: "default",
        gender: "default",
        member: false,
        file_profile: "default",
        file_avatar: "default"
    };

    $scope.submitForm = function() {
        console.log("posting data....");
        formData = $scope.form;
        //console.log(formData);
        //$http.post('form.php', JSON.stringify(data)).success(function(){/*success callback*/});

        $http.post('/api/contact', $scope.form).
            success(function(formData) {
                console.log('ContactCtrl - success');
                $location.path('/');
            });
    };
}