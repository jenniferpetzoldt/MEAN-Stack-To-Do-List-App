let listApp = angular.module('listApp', []);

listApp.controller('ListController', function(){
    const vm = this;
    vm.message = 'Hello!';
});