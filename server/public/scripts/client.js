let listApp = angular.module('listApp', []);

listApp.controller('ListController', function ($http) {
    const vm = this;
    vm.listData = [];


    vm.sendTaskToServer = function () {
        console.log('in sendTaskToServer');
        let newTask = {
            task: vm.taskIn,
            completed: false
        }
        $http({
            method: 'POST',
            url: '/list',
            data: newTask
        }).then(function (response) {
            console.log('back from POST with: ', response.data);
        }).catch(function (error) {
            alert('unable to post task');
            console.log(error);
        });//end POST
        vm.taskIn = '';
    }//end sendTaskToServer
vm.getListFromServer = function () {
    console.log('ingetListFromServer');
    $http({
        method: 'GET',
        url: '/list'
    }).then(function(response){
        vm.listData = response.data;
    }).catch(function(error){
        alert('unabel to get task list');
    });
}

});