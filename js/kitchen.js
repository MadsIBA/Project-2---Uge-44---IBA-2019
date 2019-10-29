"use strict"

 // Magic Brush (Saves time)
var $ = function (foo) {
    return document.getElementById(foo);
}

// Kitchen Canvas (resizeable with form)
let leftPoly = function () {
    let leftCanvas = $('leftCanvas');

    if (leftCanvas.getContext) {

        // Sets left canvas size
        var lcWidth = document.getElementById("lcwidth").value;
        var lcHeight = document.getElementById("lcheight").value;
        leftCanvas.width = lcWidth;
        leftCanvas.height = lcHeight;
    }
}

// Toolbox
let rightPoly = function () {
    let rightCanvas = $('rightCanvas');
    
    if (rightCanvas.getContext) {
        var rctx = rightCanvas.getContext('2d');

        // Kitchen Elements
        rctx.fillRect(20, 20, 60, 40)
        rctx.fillRect(20, 80, 40, 60)
        rctx.fillRect(20, 160, 60, 60)

        // Dør1
        rctx.beginPath();
        rctx.arc(20, 320, 80, 375 * Math.PI/180, 270 * Math.PI/180, true); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(20, 320)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Red";
        rctx.fill();

        // Dør2
        rctx.beginPath();
        rctx.arc(140, 260, 80, 90 * Math.PI/180, 345 * Math.PI/180, true); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(140, 260)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Red";
        rctx.fill();

        //Dør3
        rctx.beginPath();
        rctx.arc(100, 380, 80, 90 * Math.PI/180, 195 * Math.PI/180, false); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(100, 380)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Blue";
        rctx.fill();

        //Dør4
        rctx.beginPath();
        rctx.arc(220, 440, 80, 270 * Math.PI/180, 165 * Math.PI/180, true); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(220, 440)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Blue";
        rctx.fill();

        //Dør5
        rctx.beginPath();
        rctx.arc(100, 580, 80, 180 * Math.PI/180, 285 * Math.PI/180, false); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(100, 580)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Green";
        rctx.fill();

        //Dør6
        rctx.beginPath();
        rctx.arc(180, 580, 80, 0 * Math.PI/180, 255 * Math.PI/180, true); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(180, 580)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Green";
        rctx.fill();

        //Dør7
        rctx.beginPath();
        rctx.arc(100, 620, 80, 180 * Math.PI/180, 75 * Math.PI/180, true); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(100, 620)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Yellow";
        rctx.fill();

        //Dør8
        rctx.beginPath();
        rctx.arc(180, 620, 80, 0 * Math.PI/180, 105 * Math.PI/180, false); //arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean):
        rctx.lineTo(180, 620)
        rctx.closePath();
        rctx.strokeStyle = "black";
        rctx.lineWidth = 5;
        rctx.stroke();
        rctx.fillStyle = "Yellow";
        rctx.fill();
    }
}

// Load everything
window.addEventListener('load', leftPoly);
window.addEventListener('load', rightPoly);