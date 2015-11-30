'use strict';

angular.module('votingAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('poll', {
                url        : '/:username/:pollname/:pollid',
                templateUrl: 'app/poll/poll.html',
                controller : 'PollCtrl'

            });
    });