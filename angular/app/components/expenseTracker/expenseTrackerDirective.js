(function(){
	'use strict';
	
	angular.module('saver').directive('expenseTrackerDirective',expenseTrackerDirective);
	
	console.log("expense tracker directive global func")
	
	function expenseTrackerDirective(){
	
		console.log("expense tracker dir");
		
		return {
			restrict : 'E',
			link: function(){console.log("exp track dir link");},
			replace: true,
			templateUrl:'app/components/expenseTracker/expenseTracker.html'
		}
	}

})();