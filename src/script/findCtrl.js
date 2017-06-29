(function() {
  'use strict';


  angular
    .module('myapp')
    .controller('findCtrl', findCtrl);

  function findCtrl ($scope) {
    /*locals*/
    var vm = $scope;

    /*vm-properties*/
    vm.name = 'findCtrl';

    /*initialization*/
    initializeDataTables();

    /*vm-function*/

    /*functions*/
    function initializeDataTables () {
      $(document).ready(function () {
        $('#example').DataTable()
      })
    }

  }

})();


