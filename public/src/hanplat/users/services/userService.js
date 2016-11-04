/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('users')
  .service('userService',function(){

    var userRef = new Firebase('https://hplat.firebaseio.com/users')

    var userService = this;

    userService.signup = function(userData){
      userRef.push(userData);
    }
    userService.get = function(userEmail){
      userRef.once('value',function(snapshot){
        snapshot.forEach(function(data){
          if(data.val().email == userEmail){
            console.log("FOUND! " + data.val().email);
            console.log(data.val());
            return data.val();
          }
        });
      });
    }
    userService.pushErrand = function(userEmail,errandKey){
      userRef.once('value',function(snapshot){
        snapshot.forEach(function(data){
            if(data.val().email == userEmail){
              userRef.child(data.key()).child('errands').child(errandKey).set({
                errandKey:errandKey
              });
            }
        });
      });
    }
    userService.deleteErrand = function(userEmail,errandKey){
      userRef.once('value',function(snapshot){
        snapshot.forEach(function(data){
          if(data.val().email == userEmail){
            userRef.child(data.key()).child('errands').child(errandKey).remove();
          }
        });
      });
    }
  });
