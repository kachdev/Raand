var raandAngular = angular.module('raandAngular', []);

raandAngular.service('posterService', function ($http) {
    return {
      get: function () {
        return $http.get('http://localhost:8000/api/poster');
      },
      
  
      save: function (params) {
        console.log(params);
        return $http({
          method: 'POST',
          url: 'http://localhost:8000/api/poster',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: $.param(params)
        });
      },


  
    //   delete: function (id) {
    //     return $http.delete('http://localhost:8000/api/tweets/'+ id);
    //   }
    }
  });

  raandAngular.controller('raandCtrl', function ($scope, posterService) {

    $scope.name = 'feyi';
      $scope.raandData = {};

      posterService.get()
        .then(function (response) {
            $scope.raand = response.data;
            console.log($scope.raand);
        }, function(error){
            console.log(error);
        });


        $scope.saveRaand = function(){
          posterService.save($scope.raandData)
              .then(function(response) {
                $scope.raandData = {};
                  posterService.get()
                  .then(function(response){
                      $scope.raand = response.data;
                  });

                  $scope.raandData = {};
              }, function(error){
                console.log(error);
            });
        }

      
  });