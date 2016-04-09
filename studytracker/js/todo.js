var todoApp = angular.module('TodoApp', ['firebase']);

todoApp.controller('TodoCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {
        
	// CREATE A FIREBASE REFERENCE
    var todosRef = new Firebase('your-firebase-app.firebase.io');

    // GET TODOS AS AN ARRAY
    $scope.todos = $firebaseArray(todosRef);
	
}]);