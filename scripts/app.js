angular.module('app',[]);


angular.module('app').controller('CalculatorController', ['$scope', function ($scope) {
	
	$scope.buttons = [
		{type:'numeric',value:"7"}, {type:'numeric',value:'8'}, {type:'numeric',value:"9"},
		{type:'operator',value:"+"},{type:'numeric',value:"4"}, {type:'numeric',value:"5"},
		{type:'numeric',value:"6"}, {type:'operator',value:"-"},{type:'numeric',value:"1"},
		{type:'numeric',value:"2"}, {type:'numeric',value:"3"}, {type:'operator',value:"/"}, 
		{type:'numeric',value:"0"}, {type:'numeric',value:"."}, {type:'eval',value:"="},
		{type:'operator',value:"*"}
	];
	$scope.screen = 0;

	$scope.eval = function(){
		$scope.screen = math.eval(math.chain($scope.screen).done());
	}

	$scope.clickButton = function (button){
		if('eval'== button.type && '='== button.value){
			$scope.eval();
			return ;
		}
		$scope.screen += math.chain(button.value).done();
	};

	$scope.screenKeyUp = function($event){
		if($event.keyCode == 13){
			$scope.eval();
		}
	};

	$scope.clear = function(){
		$scope.screen = 0;
	};
}])
