var mainApp;
(function (mainApp) {
    "use strict";
    var module = angular.module("mainApp");
    module.component("movieRating", {
        templateUrl: "../Templates/MovieRatingComponent",
        bindings: {
            value: "<"
        },
        controllerAs: "model",
        controller: ["", movieRatgin_component]
    });
    var movieRatgin_component = function () {
        var model = this;
        model.$onInit = function () {
            model.entries = new Array(model.value);
        };
    };
})(mainApp || (mainApp = {}));
//# sourceMappingURL=movie-rating.component.js.map