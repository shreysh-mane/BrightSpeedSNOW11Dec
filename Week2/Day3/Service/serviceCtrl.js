var app= angular.module("app",[]);

app.controller("serviceCtrl",["$scope","demoService",function($scope,demoService){
    
    $scope.arr;
    var c=0;

    $scope.getData=function(){
        $scope.arr=demoService.getData();
       
    }   


    $scope.sendData=function(ele){
       
        demoService.sendData(ele);
    }

}])