'use strict';

angular.module('votingAppApp')
    .controller('PollCtrl', function ($scope, $stateParams, $http, $state, Auth) {

        $scope.showChart = false;
        $scope.disable = true;

        $http.get('api/polls/' + $stateParams.pollid)
            .success(function (response) {
                $scope.poll = response;
                console.log($scope.poll);
                console.log(response.voted_users);
                console.log(Auth.getCurrentUser().name);
                if (response.voted_users.indexOf(Auth.getCurrentUser().name) !== -1) {
                    $scope.data = [response.votes];
                    $scope.showChart = true;
                }
            });

        $scope.optionIndexFinder = function (index) {
            $scope.optionIndex = index;
            $scope.disable = false;
        }

        $scope.upVote = function () {
            $http.post('api/polls/' + $stateParams.pollid + '/' + $scope.optionIndex)
                .success(function (response) {
                    $scope.poll = response;
                    $scope.data = [response.votes];
                    $scope.showChart = true;
                });
        }

//        $scope.data = [];

//        $scope.data.push($scope.poll.votes);

//        $scope.data = [$scope.poll.vote];
    });
