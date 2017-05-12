module mainApp{
    "use strict";
    var module = angular.module("mainApp");

    module.component("mainRouter", {
        templateUrl: "../MainRouterComponent",
        $routeConfig: [
            { path: "/list", component: "movieList", name: "List" },
            { path: "/about", component: "aboutUs", name: "About" },
            { path: "/**", redirectTo:["List"] }
        ]
    });
}