/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('errand')
  .controller('errandBidController',function($scope,errandModel,loginService,$routeParams){
    var errandBidCtrl = this;

    //load errandItem based on $routeParams.id (errandItem uniqueKey)
    errandModel.get().$loaded()
      .then(function(arr){
      errandBidCtrl.item = arr.$getRecord($routeParams.id);
      })
    .catch(function(error) {
      console.log("Error:", error);
    });

    errandBidCtrl.routeId = $routeParams.id;

    errandBidCtrl.postBid = function(){
      errandModel.postBid({
        key:$routeParams.id,
        bidderId:loginService.currentUser,
        bidderDescription:errandBidCtrl.bidderDescription,
        bidMoney:errandBidCtrl.money
      });
    }

  });
