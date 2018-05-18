
App.component('greeting',{
    // template:'<div>{{$ctrl.message}}</div>',
    templateUrl:'./src/component/views/GreetingComponent.html',
    bindings:{},
    controller:Greeting
});

Greeting.$inject = ['$scope'];
function Greeting($scope){
    var $ctrl = this;
    $ctrl.message="hellow every one .. !!";

    $ctrl.$onInit = function(){
        // $ctrl.message="hellow every one .. !!";
    };

}
