module mainApp {
    "use strict";
    var module = angular.module("mainApp");
    module.component("movieRating", {
        templateUrl: "../Templates/MovieRatingComponent",
        bindings: {
            value: "<"
        },
        transclude:true,
        controllerAs: "model",
        controller: function () {
            var model = this;
            model.$onInit = function () {
                model.entries = new Array(model.value);
            }
            model.$onChanges = function () {
                model.entries = new Array(model.value);
            }
        }
    });
}