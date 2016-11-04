/**
 *
 * @author     Hoonil Kim(nujabes403@gmail.com)
 * @version    1.0.0
 */

angular.module('Hanplat')
  .config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'src/hanplat/errand/tmpl/errand_expose.html',
      controller:'errandExposeController',
      controllerAs:'errandExposeCtrl'
    })
    .when('/errand',{
      templateUrl:'src/hanplat/errand/tmpl/errand_expose.html',
      controller:'errandExposeController',
      controllerAs:'errandExposeCtrl'
    })
    .when('/errand/:id',{
      templateUrl:'src/hanplat/errand/tmpl/errand_detail.html',
      controller:'errandDetailController',
      controllerAs:'errandDetailCtrl'
    })
    .when('/errand_post',{
      templateUrl:'src/hanplat/errand/tmpl/errand_post.html',
      controller:'errandPostController',
      controllerAs:'errandPostCtrl'
    }).
    when('/errand_bid/:id',{
      templateUrl:'src/hanplat/errand/tmpl/errand_bid.html',
      controller:'errandBidController',
      controllerAs:'errandBidCtrl'
    });
  });
