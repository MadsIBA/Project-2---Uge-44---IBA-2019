var canvas = document.getElementById("kitchen")
canvas.width = 800;
canvas.height = 400;

//Forkortelse for context
var ctx = canvas.getContext("2d");


//Køkken elementer array
var kicthenElement = [tools, table];

var tools = ctx.fillRect(20, 20, 40, 60)
var table = ctx.fillRect(20, 100, 60, 40)

/*
//Køkken elementer til canvas
for (var i = 0; i < 2; i++) {
    kitchenElemenet = [i];
    }
*/