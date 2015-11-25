'use strict';

angular.module('votingAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: 'y',
        templateUrl: '../y/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });
  });