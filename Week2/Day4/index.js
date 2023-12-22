var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl:'singIn.html',
        controller:'SignInCtrl'
    }).when('/register',{
        templateUrl:'./view/register.html',
        controller:'registerCtrl'
     }).when('/dashboard',{
        templateUrl:'dashboard.html',
        controller:'dashboardCtrl'
     }).otherwise({
        redirectTo:"/"
     })

})
