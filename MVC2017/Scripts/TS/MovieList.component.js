var mainApp;
(function (mainApp) {
    var module = angular.module("mainApp");
    function fetchMovies($http) {
        return $http.get("../APINormal/getmovies")
            .then(function (response) {
            return response.data;
        });
    }
    function movieListController($http) {
        var model = this;
        model.moviesList = [];
        model.$onInit = function () {
            fetchMovies($http).then(function (movies) {
                model.movieList = movies;
            });
            model.upRating = function (movie) {
                if (movie.rating < 5) {
                    movie.rating += 1;
                }
            };
            model.downRating = function (movie) {
                if (movie.rating > 1) {
                    movie.rating -= 1;
                }
            };
        };
    }
    module.component("movieList", {
        templateUrl: "../Templates/MovieListComponent",
        controllerAs: "model",
        controller: ["$http", movieListController]
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=MovieList.component.js.map