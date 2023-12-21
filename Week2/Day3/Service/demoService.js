

app.service("demoService",["$http", function($http){

    var arr=[10,20,30,40];

    this.getData=function(){   
        return arr;
    }


    this.sendData=function(ele){
        arr.push(ele);

    }

} ]);