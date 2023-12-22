
app.controller("registerCtrl",["$scope",function($scope){

    $scope.name;
    $scope.email;
    $scope.pass;


    $scope.user;
    $scope.getFormData=function(){
    var userObj={};
    userObj.name=$scope.name;
    userObj.email=$scope.email;
    userObj.pass=$scope.pass; 

    console.log(userObj);


    // call the service and send data.
    // redirect user to singin form




    }


}])