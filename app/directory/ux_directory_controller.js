'use strict';

function UXDirectoryCtl($scope, directoryResource){
    
    $scope.membersLoaded = false;
    
    directoryResource.get().then(function(members){
        $scope.members = members;
        $scope.membersLoaded = true;
    });
    
    $scope.sortType = 'firstName+surname';
    $scope.sortReverse = false;
    
    $scope.selectMember = function(member){
        $scope.selectedMember = member;
    };
    
    $scope.sortBy = function(sortType){
        $scope.sortType = sortType;
        $scope.sortReverse = !$scope.sortReverse;
    }
}