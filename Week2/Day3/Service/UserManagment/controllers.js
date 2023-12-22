
app.controller("signinCtrl",["$scope","userService",function($scope,userService){

    $scope.userList;

    $scope.getData=function(){
            
        userService.getUserData(function(data){
            console.log(data);
            $scope.userList=data;  
        });
        
    }

}])






app.controller("registerCtrl",["$scope","userService",function($scope,userService){

    $scope.name;
    $scope.email;
    $scope.pass;


    $scope.user;
    $scope.getFormData=function(){
    var userObj={};
    userObj.name=$scope.name;
    userObj.email=$scope.email;
    userObj.pass=$scope.pass; 

    // console.log(userObj);


    userService.sendUserData(userObj,function(data){
        console.log(data);
    });
        
       

    }


}])





