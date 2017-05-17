module mainApp {

    "use strict";
    var module = angular.module("mainApp", ["flow", "ui.router"]);

    module.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state(
            {
                name: "movieListState",
                url: "/list",
                component: "movieList"
            })
            .state(
            {
                name: "aboutUsState",
                url: "/about",
                component: "aboutUs"
            });
    });

    module.component("aboutUs", {
        template: "about mahmoud ahmed"
    });
    //.config(['flowFactoryProvider', function (flowFactoryProvider) {
    //    flowFactoryProvider.defaults = {
    //        permanentErrors: [404, 500, 501],
    //        maxChunkRetries: 1,
    //        chunkRetryInterval: 5000,
    //        simultaneousUploads: 4,
    //        singleFile: true
    //    };
    //    flowFactoryProvider.on('catchAll', function (event) {
    //        //console.log('catchAll', arguments);
    //    });
    //    // Can be used with different implementations of Flow.js
    //    // flowFactoryProvider.factory = fustyFlowFactory;
    //}]);
}