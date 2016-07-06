(function(){
	'use strict';
	
	angular.module('saver').directive('expenseTrackerDirective',expenseTrackerDirective);
	
	
	function expenseTrackerDirective(){
	
		function link(scope, element, attr){
			var ddNode = $("#categoriesDropdown",element);
			if(ddNode){
				ddNode.dropdown();
			}
		}
		
		return {
			restrict : 'E',
			link: link,
			replace: true,
			templateUrl:'app/components/expenseTracker/expenseTracker.html'
		}
	}

})();