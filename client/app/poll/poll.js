'use strict';

angular.module('votingAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('poll', {
                url        : '/:username/:pollname',
                templateUrl: 'app/poll/poll.html',
                controller : 'PollCtrl'

            });
    });