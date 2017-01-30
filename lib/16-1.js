app.controller("myController",function($scope){
	$scope.lastname="小鸟";
	$scope.firstname="李";
})
app.directive("myDir",function(){
	return {
		template:"我在指令构造器中创建"
	}
})