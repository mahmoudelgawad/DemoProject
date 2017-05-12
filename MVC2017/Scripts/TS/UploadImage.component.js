var mainApp;
(function (mainApp) {
    function SendFile($http, file) {
        $http.post("../api/apinormal/postfiletoserver", file, "application/text")
            .then(function (response) {
            return response.data;
        });
    }
    function getBase64Image(img) {
        // Create an empty canvas element
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        // Copy the image contents to the canvas
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        // Get the data-URL formatted image
        // Firefox supports PNG and JPEG. You could check img.src to
        // guess the original format, but be aware the using "image/jpg"
        // will re-encode the image.
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    function uploadImageController($http) {
        var model = this;
        model.$onInit = function () {
            model.flowObject = {};
            model.imageData = null;
            model.flowOptions = {
                target: "../api/apinormal/postfiletoserver"
            };
            model.flowFileCheck = function () {
                //console.log(model.flowObject);
                if (model.flowObject.flow == undefined || model.flowObject.flow == null) {
                    return;
                }
                if (model.flowObject.flow.files.length == 0) {
                    return;
                }
                if (model.flowObject.flow.files[0].file.type != "image/jpeg") {
                    alert("not supported format");
                }
                if (model.flowObject.flow.files[0].size > 21618) {
                    alert("the image too big");
                    var img = document.getElementById("imgElm");
                    model.imageData = getBase64Image(img);
                }
            };
            model.flowFileSuccess = function ($file, $message, $flow) {
                //var img = document.getElementById("imgElm");
                //model.imageData = getBase64Image(img);
                //SendFile($http, model.imageData);
                //console.log($message);
                model.imageData = $message.replace('\"', '').replace('\"', '');
            };
        };
    }
    var module = angular.module("mainApp");
    module.component("uploadImage", {
        templateUrl: "./templates/uploadImagecomponent",
        controllerAs: "model",
        controller: ["$http", uploadImageController]
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=UploadImage.component.js.map