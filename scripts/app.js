angular.module('app',[]);

angular.module('app').directive('calculator', [function () {
	return {
		restrict: 'E',
		controller:function($scope, $compile){
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
		},
		link: function (scope, iElement, iAttrs) {
			
		},
		template:'<div id="calculator"><div class="top"><span class="clear" ng-click="clear()">C</span><input type="text" class="screen" ng-model="screen" autofocus value="{{ screen }}" ng-keyup="screenKeyUp($event)" /></div><div class="keys"><span ng-repeat="button in buttons" class="{{ button.type }}" ng-click="clickButton(button)">{{ button.value }}</span></div></div>'
	};
}])

