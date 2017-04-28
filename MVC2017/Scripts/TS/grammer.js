var FirstTypeScript;
(function (FirstTypeScript) {
    var squareITSimple = function (h, w) {
        return h * w;
    };
    var squareITsimpest = function (h, w) { return h * w; };
    var helloworld;
    helloworld = function (name) {
        console.log("Hello, " + (name || "unknown preson"));
    };
    helloworld();
    helloworld("mahmoud ahmed");
    var squareIt;
    var recA = { h: 7 };
    var recB = { h: 7, w: 15 };
    squareIt = function (rec) {
        if (rec.w === undefined) {
            return rec.h * rec.h;
        }
        return rec.h * rec.w;
    };
    console.log(squareIt(recA));
    console.log(squareIt(recB));
})(FirstTypeScript || (FirstTypeScript = {}));
//# sourceMappingURL=grammer.js.map