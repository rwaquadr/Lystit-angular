angular.module('NewService', []).service('New', ['$http', function($http, OperatorController) {

var URL = 'https://calm-ocean-58797.herokuapp.com';
var operator;
	return {
//GET ALL TODOS
		getAllTodos : function(data) {
			return $http.get(URL +'/get-allTodos', data)
		},
//POST NEW TODO
		postFunc : function(obj){
			return $http.post(URL +'/post-newTodos', obj)
		},
//GET OPERATOR
		getOperator : function(data){
			return operator;
		},
//EDIT 
		editTodos : function(tempObj){
			return $http.post(URL +'/post-editTodos', tempObj)
		},
//ADD OPERATOR
		addOperator : function(data){
			operator = data;
		},
//DELER TODOS 
		deleteTodos : function(delObj){
			return $http.post(URL +'/post-deleteTodos', delObj)
		}		

	}

}]);