// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.school-index', {
      url: '/schools',
      views: {
        'events-tab': {
          templateUrl: 'templates/school-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })
    .state('tab.event-index', {
      url: '/events',
      views: {
        'events-tab': {
          templateUrl: 'templates/event-index.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.event-detail', {
      url: '/event/:eventId',
      views: {
        'events-tab': {
          templateUrl: 'templates/event-detail.html',
          controller: 'PetDetailCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/adopt',
      views: {
        'events-tab': {
          templateUrl: 'templates/adopt.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

	.state('tab.addAnEvent', {
      url: '/addAnEvent',
      views: {
        'events-tab': {
          templateUrl: 'templates/addAnEvent.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

	.state('tab.login2', {
      url: '/login2',
      views: {
        'events-tab': {
          templateUrl: 'templates/login2.html',
          controller: 'PetIndexCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'events-tab': {
          templateUrl: 'templates/about.html',
          controller: 'PetIndexCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/schools');

})
.run(function() {
  ionic.Platform.ready(function() {
    StatusBar.hide();
    // StatusBar.backgroundColorByName("red");
  });
});

