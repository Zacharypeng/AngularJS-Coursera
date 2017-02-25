(function(){
'use strict';

angular.module('Shopping List Check Off', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];


function ToBuyController(ShoppingListCheckOffService, $scope) {
	var buyitem = this;
	
	// Pass items between the controllers 
	buyitem.items = ShoppingListCheckOffService.showitem();
	$scope.buyitem = buyitem.items;
	$scope.buyitembottom = ShoppingListCheckOffService.passitem;
	// Check if the to buy list is empty 
	$scope.buyempty = ShoppingListCheckOffService.checkcntbuy;

}


function AlreadyBoughtController(ShoppingListCheckOffService, $scope) {
	var boughtitem = this;
	// Show the already bought items
	boughtitem.items = ShoppingListCheckOffService.showboughtitem();
	$scope.boughtitem = boughtitem.items;
	// Check if the already bought list is empty
	$scope.boughtempty = ShoppingListCheckOffService.checkcntbought;
}

function ShoppingListCheckOffService (){
	var service = this;
	var ToBuyList = [
	{
		name: "chicken",
		quantity: "10"
	},
	{
		name: "coffee",
		quantity: "5"
	},
	{
		name: "egg",
		quantity: "70"
	},
	{
		name: "sweet potato",
		quantity: "20"
	},
	{
		name: "broccoli",
		quantity: "20"
	}
	];

	var AlreadyBoughtList = [];
	

	service.showitem = function() {
		return ToBuyList;
	}

	var cnt = 0;
	service.passitem = function(index) {
		AlreadyBoughtList[cnt] = ToBuyList[index];
		cnt++;
		ToBuyList.splice(index, 1);
	}

	service.showboughtitem = function() {
		return AlreadyBoughtList;
	}

	service.checkcntbuy = function(){
		if(cnt == 5){
			return true;
		}
	}

	service.checkcntbought = function() {
		if(cnt == 0){
			return true;
		}
	}


}





})();
