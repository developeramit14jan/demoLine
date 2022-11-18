var canvas = new fabric.Canvas('canvas');
var rectangle = new fabric.Rect({
    left: 500,
    top: 200,
    width: 100,
    height: 100,
    angle: 45
});
// canvas.add(rectangle);
var rect = new fabric.Rect({
    left: 2,
    top: 2,
    width: 100,
    height: 100,
});
canvas.add(rect);

// var filedata = canvas.toSVG(); // the SVG file is now in filedata
// var blob = new Blob([filedata]);
// saveAs(blob, "svgfile.svg");
// console.log(blob);


fabric.loadSVGFromURL('./svgfile.svg', function (objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    canvas.add(obj);
});
