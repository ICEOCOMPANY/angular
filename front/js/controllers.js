var F1FeederApp = angular.module("F1FeederApp.controllers", []);

F1FeederApp.controller('driversController', function ($scope, ergastAPIservice) {
    
    $scope.nameFilter = null;
    $scope.driversList = [];
    
    ergastAPIservice.getDrivers().success(function(response){
        //response from server
        $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        console.log(response);
    });
    
});

F1FeederApp.controller('driverController', function($scope, $routeParams, ergastAPIservice){
    
    $scope.id = $routeParams.id;
    $scope.races = [];
    $scope.driver = null;
    
    ergastAPIservice.getDriverDetails($scope.id).success(function (response){
       $scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]; 
    });
    
    ergastAPIservice.getDriverRaces($scope.id).success(function (response){
       $scope.races = response.MRData.RaceTable.Races; 
    });
    
});