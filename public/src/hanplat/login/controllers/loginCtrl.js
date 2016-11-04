/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('login')
  .controller('loginController',function($scope,loginService){
    var loginCtrl = this;

    // signup from loginService
    loginCtrl.signup = function(email,password){
      loginService.signup(loginCtrl.email,loginCtrl.password);
    }

    // login from loginService
    loginCtrl.login = function(){
      loginService.login(loginCtrl.email,loginCtrl.password);
    }

    // 'loginComplete' event Listen
    $scope.$on('loginComplete',function(e,data){
      // reflect loginCtrl.currentUser changed to view
      $scope.$apply(function(){
        loginCtrl.currentUser = data.currentUser;
      });
    });
  });
