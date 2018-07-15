(function() {

    'use strict';

    /**
	 * @ngdoc function
	 * @name rabobankStmtProsApp.services:readFileData
	 * @description
	 * # fileReaderDirective
	 * directive to read the CSV file
	 */
    angular.module('rabobankStmtProsApp')
    .factory('readFileData', function() {
        return {
            processData: function(csv_data) {
                var record = csv_data.split(/\r\n|\n/);
                var headers = record[0].split(',');
                var lines = [];
                var json = {};
      
                for (var i = 1; i < record.length; i++) {
                    var data = record[i].split(',');
                    if (data.length == headers.length) {
                        var tarr = {};
                        for (var j = 0; j < headers.length; j++) {
                            tarr[headers[j].substring(1, headers[j].length-1)] = data[j];
                        }
                        lines.push(tarr);
                    }
                }
                return lines;
            }
        };
      });
})();