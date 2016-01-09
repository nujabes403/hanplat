angular.module('errand')
  .controller('errandExposeController',function($scope,errandModel,userService){
    var errandExposeCtrl = this;

    errandExposeCtrl.errandArray = errandModel.get();

    errandExposeCtrl.deleteItem = function(userEmail,key){
      errandModel.delete(key);
      userService.deleteErrand(userEmail,key);
    }
  });
