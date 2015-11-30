'use strict';

angular.module('votingAppApp')
    .controller('PollCtrl', function ($scope, $stateParams, $http, $state, Auth) {

        $http.get('api/polls/' + $stateParams.pollid)
            .success(function (response) {
                $scope.poll = response;
                console.log($scope.poll);
            });

        $scope.optionIndexFinder = function (index) {
            $scope.optionIndex = index;
        }

        $scope.upVote = function () {
            $http.post('api/polls/' + $stateParams.pollid + '/' + $scope.optionIndex)
                .success(function (response) {
                    
                    $scope.poll = response;
                });
        }

        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];


        $scope.data = [

            [28, 48, 40, 19, 86, 27, 90]
        ];
    });
