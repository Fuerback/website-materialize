var dashboardModulo = angular.module('dashboardModulo', []);

dashboardModulo.controller('dashboardController', function ($scope){
  $scope.showModal = function() {
    $('.modal').modal();
  }

  $scope.showSideNav = function() {
    $('.sidenav').sidenav();
  }

  $scope.fechaModal = function() {
    $('.modal').modal().close();
  }
})

$(document).ready(function(){
  $('select').formSelect();
  $('.datepicker').datepicker({
    dateFormat: 'dd/mm/yy'
  });

  $("#valor").maskMoney({
    prefix: "R$ ",
    decimal: ",",
    thousands: "."
	});
});

