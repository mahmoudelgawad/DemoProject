var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

function drawText(ctx, text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "bold 20px Arial";
    ctx.fillText(text, x, y);
}
// just for test
// drawLine(ctx, 50, 50, 100, 100);
// drawArc(ctx, 150, 150, 150, 0, Math.PI/3);
// drawPieSlice(ctx, 150, 150, 100, 0, Math.PI / 3, '#C70039');
// drawPieSlice(ctx, 150, 150, 100, Math.PI / 3, (Math.PI / 3)*2, 'green');
// drawPieSlice(ctx, 150, 150, 100, (Math.PI / 3)*2, (Math.PI / 3)*3, 'orange');
// drawPieSlice(ctx, 150, 150, 100, (Math.PI / 3)*3, ((Math.PI)/3)*4, 'blue');

class PieChart {
    constructor(options) {
        this.options = options;
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.data = options.data;
        this.colors = options.colors;
    }

    draw() {
        let totalValue = 0;
        for (let n in this.data) {
            totalValue += this.data[n].value;
        }
        let startAngle = 0;
        let sliceAngle = 0;
        let centerX = this.canvas.width / 2;
        let centerY = this.canvas.height / 2;
        let radius = Math.min(centerX, centerY);
        let offset = (this.options.doughnutSize) ? (radius * this.options.doughnutSize)/2 : 0;
        for (let n in this.data) {
            let catg = this.data[n];
            let labelX = 0;
            let labelY = 0;
            let labelText = "";
            sliceAngle = (Math.PI * 2) * catg.value / totalValue;
            drawPieSlice(
                this.ctx,
                centerX,
                centerY,
                radius,
                startAngle,
                startAngle + sliceAngle,
                catg.color
            );
            startAngle += sliceAngle;
            // labelX = ((centerX + radius + offset)/2) * Math.cos(startAngle/2);
            // labelY = ((centerY + radius + offset)/2) * Math.sign(startAngle/2);
            labelX = (radius * Math.cos(startAngle));
            labelY = (radius * Math.sign(startAngle));
            labelX = (labelX < 0)?labelX*-1 : labelX;
            labelY = (labelY < 0)?labelY*-1 : labelY;
            labelText = Math.round((catg.value / totalValue) * 100);
            drawText(this.ctx, labelText + " %", labelX, labelY, "black");
        }

        //draw white chart circle over to make doughnut
        if (this.options.doughnutSize && this.options.doughnutSize < 1 && this.options.doughnutSize > 0) {
            drawPieSlice(
                this.ctx,
                centerX,
                centerY,
                radius * this.options.doughnutSize,
                0,
                Math.PI * 2,
                'white'
            );
        }
    }

}

var data = [{ title: "Real madrid", value: 10, color: "#009999" },
{ title: "Barcelona", value: 14, color: "#660066" },
{ title: "juventus", value: 2, color: "yellow" },
{ title: "Bayern Munich", value: 12, color: "red" }
];
var obj = new PieChart({
    canvas: myCanvas,
    data: data,
    doughnutSize: 0
});
obj.draw();
