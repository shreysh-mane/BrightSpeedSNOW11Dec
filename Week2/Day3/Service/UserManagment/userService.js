app.service("userService",["$http",function($http){


    this.getUserData=function(cb){
        
        $http(
            {
                method:"GET",
                url:"http://localhost:3000/users"
            }
        ).then(function(response){
            // console.log(response);
            // console.log(response.data);

            cb(response.data);
           
        },function(e){
            console.log(e);
        });



    }


    this.sendUserData=function(userObj,cb){
        // console.log(userObj);
        $http(
            {
                method:"POST",
                url:"http://localhost:3000/users",
                data:userObj
            }
        ).then(function(response){
            // console.log(response.data);
            cb(response.data);
        },function(e){
            console.log(e);
        });



    }
    






}]);