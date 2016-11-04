/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('errand')
  .controller('errandDetailController',function($scope,errandModel,$routeParams){
    var errandDetailCtrl = this;

    errandModel.get().$loaded()
      .then(function(errandArr){
      errandDetailCtrl.item = errandArr.$getRecord($routeParams.id);
      console.log(errandDetailCtrl.item);
      })
    .catch(function(error) {
      console.log("Error:", error);
    });

  });
