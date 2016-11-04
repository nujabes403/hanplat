/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('errand')
  .controller('errandPostController',function($scope,loginService,errandModel,userService){
    var errandPostCtrl = this;

    errandPostCtrl.registerErrand = function(){
      var date = new Date();
      errandPostCtrl.registrationInfo = {
        category:errandPostCtrl.category,
        title:errandPostCtrl.title,
        description:errandPostCtrl.description,
        budget:errandPostCtrl.budget,
        desiredDate:errandPostCtrl.desiredDate,
        desiredLocation:errandPostCtrl.desiredLocation,
        maker:loginService.currentUser.email,
        registrationDate:date.getFullYear()+'년'+(date.getMonth()+1)+'월'+date.getDate()+'일'
      };

      console.log(errandPostCtrl.registrationInfo);
      var errandKey = errandModel.save(errandPostCtrl.registrationInfo);
      console.log(errandModel.get());
      userService.pushErrand(errandPostCtrl.registrationInfo.maker,errandKey);
    }

  });
