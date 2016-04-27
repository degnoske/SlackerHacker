var todoApp = angular.module('TodoApp', ['firebase']);

todoApp.controller('TodoCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {
        
    var todosRef = new Firebase('https://glaring-heat-8318.firebaseio.com/');

    $scope.todos = $firebaseArray(todosRef);

    // Add TODO item
    $scope.addTodo = function () {
        var timestamp = new Date().valueOf();

        $scope.todos.$add({id: timestamp, name: $scope.todoName, status: 'pending'});

        $scope.todoName = "";
    };

    // remove a TODO
    $scope.removeTodo = function (index, todo) {
        if (todo.id === undefined)return;

        $scope.todos.$remove(todo);
    };

    // update in progress status
    $scope.startTodo = function (index, todo) {
        if (todo.id === undefined)return;

        todo.status = 'in progress';
        $scope.todos.$save(todo);
    };

    // update complete status
    $scope.completeTodo = function (index, todo) {
        if (todo.id === undefined)return;

        todo.status = 'complete';
        $scope.todos.$save(todo);
    };
}]);