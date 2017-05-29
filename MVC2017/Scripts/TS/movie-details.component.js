var mainApp;
(function (mainApp) {
    "use strict";
    var module = angular.module("mainApp");
    module.component("movieDetails", {
        template: "this details",
        //templateUrl: "../Templates/MovieDetailsComponent",
        controllerAs: "model",
        controller: function () {
            var model = this;
        }
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=movie-details.component.js.map