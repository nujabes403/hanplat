/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('errand')
  .service('errandModel',function($firebaseArray){
    var errandRef = new Firebase('https://hplat.firebaseio.com/errands');

    var errandModel = this;

    errandModel.save = function(errandData){
      var pushedData = errandRef.push(errandData);
      pushedData.update({
        uniqueId:pushedData.key()
      });
      return pushedData.key();
    }
    errandModel.postBid = function(bidObj){
      console.log(bidObj);
      errandRef.child(bidObj.key).child('bidders').push({
        bidderId:bidObj.bidderId.email,
        description:bidObj.bidderDescription,
        money:bidObj.bidMoney
      });
    }

    errandModel.delete = function(key){
      errandRef.child(key).remove();
    }

    errandModel.get = function(){
      return $firebaseArray(errandRef);
    }
  });
