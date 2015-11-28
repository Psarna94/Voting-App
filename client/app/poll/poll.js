'use strict';

angular.module('votingAppApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('poll', {
                url        : '/',
                templateUrl: 'app/poll/poll.html',
                controller : 'PollCtrl',
                params     : {
                    username: null,
                    pollname: null
                }
            });
    });