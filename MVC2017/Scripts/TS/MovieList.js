var mainApp;
(function (mainApp) {
    var module = angular.module("mainApp", []);
    module.component("movieList", {
        template: "Hellow from custom component"
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=MovieList.js.map