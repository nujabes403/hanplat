/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('errand')
  .controller('errandExposeController',function($scope,errandModel,userService){
    var errandExposeCtrl = this;

    errandExposeCtrl.errandArray = errandModel.get();

    errandExposeCtrl.deleteItem = function(userEmail,key){
      errandModel.delete(key);
      userService.deleteErrand(userEmail,key);
    }
  });
