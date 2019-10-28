var canvas = document.querySelector("canvas.elements");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Rectangle x, y, width, height
c.fillStyle = "rgba(255, 0, 0, 0.5"; //50% transparent red
c.fillRect(100, 100, 160, 160);

c.fillStyle = "rgba(0, 0, 255, 1"; //Blue
c.fillRect(400, 100, 140, 160);

c.fillStyle = "rgba(0, 255, 255, 1"; //Blue
c.fillRect(450, 100, 140, 160);

c.fillStyle = "rgba(0, 255, 0, 0.5"; //50% transparent green
c.fillRect(300, 300, 100, 100);