module mainApp {
    var module = angular.module("mainApp");
   module.component("movieList",
        {
            templateUrl: "../Templates/MovieListComponent",
            controllerAs: "model",
            controller: ["$http", movieListController]
        });
    function fetchMovies($http) {
        return $http.get("../api/apinormal/getmovies")
            .then(function (response) {
                return JSON.parse(response.data);
            });
    }
    function movieListController($http) {
        var model = this;
        model.moviesList = [];
        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                model.movieList = movies;
            });
            model.upRating = function (movie: any) {
                if (movie.rating < 5) {
                    movie.rating += 1;
                }
            };
            model.downRating = function (movie: any) {
                if (movie.rating > 1) {
                    movie.rating -= 1;
                }
            };
        };
    }
 
}