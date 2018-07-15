(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name rabobankStmtProsApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the rabobankStmtProsApp
	 */
	angular.module('rabobankStmtProsApp')
	.controller('MainCtrl', MainController);
	
	MainController.$inject = ['$scope', 'readFileData'];
	
	
	function MainController($scope, readFileData) {

		var vm = this;

		$scope.fileDataObj = {};

		$scope.uploadFile = function() {
			if ($scope.fileContent) {
				$scope.fileDataObj = readFileData.processData($scope.fileContent);
				//$scope.fileData = JSON.stringify($scope.fileDataObj);
				vm.refgridOptions.data = $scope.fileDataObj;
			  }
		}
		
		vm.refgridOptions = {
			enableColumnResizing: true,
			enableFiltering: true,
			columnDefs: [
	             { field: 'First name' },
	             { field: 'Sur name' },
				 { field: 'Issue count' },
				 { field: 'Date of birth' }
             ]	
		};
	};
})();
