angular.module('login')
  .service('loginService',function($rootScope,userService){
    var loginService = this;
    var ref = new Firebase("https://hplat.firebaseio.com/");

    loginService.currentUser = {
      uid:null,
      email:null
    }

    loginService.signup = function(email,password){
      ref.createUser({
        email    : email,
        password : password
      }, function(error, userData) {
        if (error) {
          console.log("가입 오류:", error);
        } else {
          userDataObj = {email:email,uid:userData}
          userService.signup({email:email,uid:userData.uid});
        }
      });
    }

    loginService.login = function(email,password){
      ref.authWithPassword({
        email    : email,
        password : password
      }, function(error, authData) {
        if (error) {
          console.log("로그인 실패!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            loginService.currentUser = {uid:authData.uid, email:authData.password.email};
            $rootScope.$broadcast('loginComplete',{currentUser:loginService.currentUser});
        }
      });
    }

  });
