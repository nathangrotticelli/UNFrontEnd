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
   		$scope.sideMenuController.toggleLeft();
	};
	$scope.go_here = function (eventId) {

		$state.go("tab.event-detail", {eventId: eventId });
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

  $scope.show = function() {

    // Show the action sheet
    $ionicActionSheet.show({

      // The various non-destructive button choices
      buttons: [
        { text: 'via Email' },
        { text: 'via Text' },
      ],

      // // The text of the red destructive button
      // destructiveText: 'Delete',

      // The title text at the top
      titleText: 'Share This Event',

      // The text of the cancel button
      cancelText: 'Cancel',

      // Called when the sheet is cancelled, either from triggering the
      // cancel button, or tapping the backdrop, or using escape on the keyboard
      cancel: function() {
      },

      // Called when one of the non-destructive buttons is clicked, with
      // the index of the button that was clicked. Return
      // "true" to tell the action sheet to close. Return false to not close.
      buttonClicked: function(index) {
        return true;
      },

      // Called when the destructive button is clicked. Return true to close the
      // action sheet. False to keep it open
      destructiveButtonClicked: function() {
        return true;
      }
    });

  };



  $scope.pageBreak = function(string){
  	for(i=0;i<string.length;i++){
  		if(string[i]=="\n"){
  			string[i]="";
  		}
  	}
  	return string;
  }

});