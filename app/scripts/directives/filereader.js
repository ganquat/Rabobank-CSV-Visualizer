(function() {

	'use strict';

    /**
	 * @ngdoc function
	 * @name rabobankStmtProsApp.directives:fileReaderDirective
	 * @description
	 * # fileReaderDirective
	 * directive to read the CSV file
	 */
    angular.module('rabobankStmtProsApp')
    .directive('fileReaderDirective', function() {
        return {
            restrict: "A",
            scope: {
                fileReaderDirective: "=",
            },
            link: function(scope, element) {
                $(element).on('change', function(changeEvent) {
                    var files = changeEvent.target.files;
                    if (files.length) {
                        var r = new FileReader();
                        r.onload = function(e) {
                            var contents = e.target.result;
                            scope.$apply(function() {
                                scope.fileReaderDirective = contents;
                            });
                        };
                        r.readAsText(files[0]);
                    }
                });
            }
        };
    })
})();