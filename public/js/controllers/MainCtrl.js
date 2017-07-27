angular.module('MainCtrl', []).controller('MainController', function($scope, $http, $location, New) {
			
//GET ALL 
			New.getAllTodos().then(function(response){
				console.log(response.data);
				$scope.todos = response.data;
			});
//POST NEW 
			$scope.saveFunc = function(response){		
					$scope.todo.status = 'in-progress';
					console.log($scope.todo.name);
					// $scope.todo.name = response.data;
					New.postFunc($scope.todo).then(function(response){
						console.log($scope.todo);
						$scope.todo = {};

						New.getAllTodos().then(function(res,err){
							console.log(res);
							$scope.todos = res.data	
						});
					});
				}
			
//FILTER POST
			$scope.opFunc = function(data){
				console.log(data);
				New.addOperator(data);
				$location.path('/operator');
			}
				
//EDIT			
			$scope.editFunc = function(obj){
				console.log('ouch');
				console.log(obj);
				var tempObj = {_id: obj};
			
				New.editTodos(tempObj).then(function(response, err){
					if(err){
						console.log('ERROR', err)
					}else{
						console.log(response)
					}
 				New.getAllTodos().then(function(response){
                    $scope.todos = response.data;
				});
			});

		}
			

//DELETE
			$scope.deleteFunc = function(obj){
                console.log('ouch delete!');
                console.log(obj);
                var delObj = {_id: obj};
                New.deleteTodos(delObj).then(function(res,err){
                    if(err){console.log("delete error");}
                    else{console.log(res);}
                
                    New.getAllTodos().then(function(response){
                    $scope.todos = response.data;

                    });    
                });
            }
         });


// =============================================================================== 
// 			var URL = 'https://calm-ocean-58797.herokuapp.com';
// 			// var URL = 'http://localhost3000';
// //GET ALL
// 			$http.get(URL +'/get-allTodos').then(function (response){
// 				console.log(response.data);
// 				$scope.todos = response.data;

// 			});

// 		// });
// //POST NEW TODO
// 			$scope.saveFunc = function(){
// 				console.log($scope.todo);
// 				$scope.todo.status='in-progress';
// 				$scope.todo.test='hello';
// 				$http.post(URL +'/post-newTodos', $scope.todo).then(function(response){
// 					console.log(response);
// 					$scope.todo = {};
// //GET REPOPULATE TODOS
// 						$http.get(URL + '/get-allTodos').then(function(res){
// 							$scope.todos = res.data;
// 						});
// 					});
// 				};
// 		// });	
// //EDIT COMPLETES 
// 			$scope.edit = function(i){
// 				console.log(i);
// 				$scope.editObject = $scope.todos[i];
// 				// $scope.todo.status = 'complete'; 
// 				// $http.get(URL+'/get-newTodos', $scope.todo).then(function(res){
// 				// 	$scope.todos = res.data;
// 				// });
// 			}
// 		});
// ====================================================================================

			

