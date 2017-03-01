/**
 * Created by apprenant on 28/02/17.
 */

var canvas;
var deploymentArea = 250;

$( Document).ready(function()
{
    canvas = $("#canvas");




    canvas.drawImage({
        source: "Img/Map/map.jpg",
        layer: true,
        draggable: false,
        bringToFront: true,
        x: 0,
        y: 0,
        fromCenter: false
    });
});