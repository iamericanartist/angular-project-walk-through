"use strict";

app.controller("searchDatabaseCtrl", function($scope, SearchDatabaseFactory) {  //injecting the scope here

  $scope.movies = [];

  $scope.searchDatabase = function(movieToSearch){                              //from searchDatabase.html
    SearchDatabaseFactory.movieList(movieToSearch).then(function(movieData){    // movieData is related to the resolve in movieList (from factory)
      console.log("in the controller, I see movie data...", movieData);
      $scope.movies = movieData.Search;
    });
  };
});
