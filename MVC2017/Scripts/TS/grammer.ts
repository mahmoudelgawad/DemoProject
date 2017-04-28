module FirstTypeScript {

    var squareITSimple = function (h: number, w: number) {
        return h * w;
    }

    var squareITsimpest = (h: number, w: number) => h * w;

    var helloworld: (name?: string) => void;
    helloworld = (name?:string) => {
        console.log("Hello, "+(name || "unknown preson"));
    }

    helloworld();
    helloworld("mahmoud ahmed");

    var squareIt: (rec: { h: number, w?: number }) => number;
    var recA = { h: 7 };
    var recB = { h: 7, w: 15 };
    squareIt = function (rec) {
        if (rec.w === undefined) {
            return rec.h * rec.h;
        }
        return rec.h * rec.w;
    }
    console.log(squareIt(recA));
    console.log(squareIt(recB));

}




