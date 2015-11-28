'use strict';

angular.module('votingAppApp')
    .controller('DashboardCtrl', function ($scope, $http, $window, Auth) {
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.myPolls = [
            {
                options: ['label1', 'label2'],
                votes: [0, 1]
            }
        ];

        $scope.poll = {
            author: $scope.getCurrentUser().name,
            name: '',
            options: ["", ""]
        };

        getPolls();

        function getPolls() {
            $http.get('/api/polls/user/' + $scope.getCurrentUser().name)
                .success(function (response) {
                    console.log(response);
                    $scope.myPolls = response;
                });
        }

        function clearPoll() {
            $scope.poll = {
                author: $scope.getCurrentUser().name,
                name: ' ',
                options: [" ", " "]
            }
        }

        $scope.addOption = function () {
            $scope.poll.options.push(' ');
        };

        $scope.deleteOption = function (index) {
            $scope.poll.options.splice(index, 1);
        };

        $scope.submitPoll = function () {
            $http.post('/api/polls', $scope.polls)
                .success(function (response) {
                    console.log(response);
                    $scope.myPolls.push(response.data);
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


    });
