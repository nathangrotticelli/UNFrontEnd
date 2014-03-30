angular.module('starter.controllers', ['ionic'])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', function($scope, $location, PetService, $state) {
  // "Pets" is a service returning mock data (services.js)
  // ionic.Platform.ready(function() {
  //   // hide the status bar using the StatusBar plugin
  //   StatusBar.hide();
  // });

  $scope.events = PetService.all(); //equal to event array located in services
  $scope.open_menu = function(){
   		$scope.sideMenuController.toggleRight();
	};
	$scope.go_here = function (eventId) {

		$state.go("tab.event-detail", {eventId: eventId });
		};
	$scope.emailUs = function(){
				alert('hi');
		};
	// StatusBar.hide();
  // $scope.list = [];

  //       for(var i = 0; i < 8; i++) {
  //         $scope.list.push({
  //           text: 'Item ' + i
  //         });
  //       }


})

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', function($scope,$ionicActionSheet, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.singleEvent = PetService.get($stateParams.eventId);
	$scope.shareBtn = function(a,b,c,d){
		window.plugins.socialsharing.share(a,b,c,d);
		}


});