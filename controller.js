var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.firstName = "shweta";
  $scope.lastName = "jaiswal";
  $scope.fullname=function(){
   return  $scope.firstName + " " + $scope.lastName;}
});
 var newApp = angular.module("newApp", []);

         newApp.controller('studentController', function($scope) {
            $scope.student = {
               firstName: "shweta",
               lastName: "jaiswal",

               subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65},
                  {name:'English',marks:75},
                  {name:'Hindi',marks:67}
               ],
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         });