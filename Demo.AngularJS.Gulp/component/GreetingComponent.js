
App.component('greeting',{
    // template:'<div>{{$ctrl.message}}</div>',
    templateUrl:'./component/GreetingComponent.html',
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
