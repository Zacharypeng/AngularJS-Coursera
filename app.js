(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.outputRed = "";
	$scope.outputGreen = "";
	$scope.Lunch = "";
	$scope.done = function() {
		var items = new Array;
		var cnt = new Array;
		if($scope.Lunch != ""){
			items = $scope.Lunch;
			var k = 0;
			
			for(var i = 0; i < items.length; i++){
				if(items[i] == ","){
					cnt[k++] = i;
				}
			}
			var s = 0;
			for(var i = 0; i < cnt.length-1; i++){
				if(cnt[i+1] - cnt[i] > 1){
					s++;
				}
			}
			if(items[items.length-1] == "," && (cnt[cnt.length-1]-cnt[cnt.length-2] > 1)){
				s--;
			}

			if( s <= 1 && (k != items.length) ) {
				 $scope.outputGreen = "Enjoy!" ;
				 $scope.outputRed = "";
			}else if(s > 1){
				$scope.outputGreen = "Too much!" ;
				$scope.outputRed = "";
			}else{
				$scope.outputRed = "Please enter some food!" ;
				$scope.outputGreen = "";
			}
		}
		else
		{
			$scope.outputRed = "Please enter data first" ;
			$scope.outputGreen = "";		
		}
	}
};

})();