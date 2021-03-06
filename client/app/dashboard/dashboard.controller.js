'use strict';

angular.module('votingAppApp')
    .controller('DashboardCtrl', function ($scope, $http, $window, Auth, $state) {
        $scope.getCurrentUser = Auth.getCurrentUser;
        $scope.newPoll = true;
        $scope.myPolls = [
            {
                options: ['label1', 'label2'],
                votes  : [0, 1]
            }
        ];

        $scope.poll = {
            author : $scope.getCurrentUser().name,
            name   : '',
            options: ["", ""]
        };

        getPolls();

        function getPolls() {
            $http.get('/api/polls/user/' + $scope.getCurrentUser().name)
                .success(function (response) {
                    console.log(response);
                    $scope.myPolls = response;
                    console.log($scope.myPolls);
                });
        }

        function clearPoll() {
            $scope.poll = {
                author : $scope.getCurrentUser().name,
                name   : '',
                options: ["", ""]
            }
        }

        $scope.addOption = function () {
            $scope.poll.options.push(' ');
        };

        $scope.deleteOption = function (index) {
            $scope.poll.options.splice(index, 1);
        };

        $scope.submitPoll = function () {
            $http.post('/api/polls', $scope.poll)
                .success(function (response) {
                    console.log(response);
                    $scope.nameOfPoll = response.name;
                    $scope.myPolls.push(response);
                    $scope.pollSuccess = true;
                    clearPoll();
                })
        };

        $scope.disableChecker = function () {

            if ($scope.poll.name.length > 0 && $scope.poll.options.length > 1) {
                return false;
            } else {
                return true;
            }
        }

        $scope.deletePoll = function (item, index) {
            $http.delete('/api/polls/' + item._id)
                .success(function (response) {
                    $scope.myPolls.splice(index, 1);
                })
        }

        $scope.gotoPoll = function (poll) {

            $state.go('poll', {username: poll.author, pollname: poll.name, pollid: poll._id});
        }

        $scope.logout = function () {
            Auth.logout;
            $state.go('main');
        }

    });
