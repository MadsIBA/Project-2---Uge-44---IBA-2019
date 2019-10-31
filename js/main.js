'use strict';
/**
 * nQuery, *the* JS Framework
 */
var $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}


/*globals document, window */
/**
 * Canvas object
 */
let Canvas = {
    init(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();
    },
    init2(canvasId, color) {
        this.canvas = $(canvasId);
        this.context = this.canvas.getContext("2d");
        this.color = color;
        this.prep();

        let height = document.getElementById("height").value;
        let width = document.getElementById("width").value;
        
        this.canvas.height = height;
        this.canvas.width = width;
    },
    prep() {
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    getContext() {
        return this.context;
    },
    getHeight() {
        return this.canvas.height;
    },
    getWidth() {
        return this.canvas.width;
    }
};


/*globals document, window */
'use strict';

/**
 * Shape object, with added move method
 */
let Shape = {
    init(cv, x, y, width, height, color) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    },

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    },

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
};

let Circle = {
    init(cv, x, y, radius, sAngle, eAngle, rotation, color,) {
        this.ctx = cv.context;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sAngle = sAngle;
        this.eAngle = eAngle;
        this.rotation = rotation;
        this.color = color;
        this.lx1 = this.x;
        this.ly1 = this.y;
    },

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle, this.rotation);
        this.ctx.lineTo(this.lx1, this.ly1);
        this.ctx.closePath();
        this.ctx.fill();
    },

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
};


'use strict';

/* 
 * nmlCanvas80.js
 */
let initialize = function () {
    /*
     * create two canvases and put two shapes into the right one
     * via an array
     */
    mycv1 = Object.create(Canvas);
    mycv1.init('myCanvas1', 'transparent');
    mycv1.canvas.addEventListener('click', select);
    mycv2 = Object.create(Canvas);
    mycv2.init2('myCanvas2', 'transparent');
    // create objects
    let shape1 = Object.create(Shape);
    shape1.init(mycv1, 160, 20, 60, 40, 'blue');
    let shape2 = Object.create(Shape);
    shape2.init(mycv1, 160, 90, 40, 60, 'green');
    let shape3 = Object.create(Shape);
    shape3.init(mycv1, 160, 180, 60, 60, 'red');
    //Doors
    let shape4 = Object.create(Circle);
    shape4.init(mycv1, 60, 190, 40, 180 * Math.PI/180, 285 * Math.PI/180, false, 'black');
    let shape5 = Object.create(Circle);
    shape5.init(mycv1, 90, 190, 40, 0 * Math.PI/180, 255 * Math.PI/180, true, 'black');
    let shape6 = Object.create(Circle);
    shape6.init(mycv1, 60, 200, 40, 180 * Math.PI/180, 75 * Math.PI/180, true, 'black');
    let shape7 = Object.create(Circle);
    shape7.init(mycv1, 90, 200, 40, 0 * Math.PI/180, 105 * Math.PI/180, false, 'black');

    let shape8 = Object.create(Circle);
    shape8.init(mycv1, 70, 60, 40, 270 * Math.PI/180, 165 * Math.PI/180, true, 'black');
    let shape9 = Object.create(Circle);
    shape9.init(mycv1, 80, 60, 40, 270 * Math.PI/180, 15 * Math.PI/180, false, 'black');
    let shape10 = Object.create(Circle);
    shape10.init(mycv1, 70, 90, 40, 90 * Math.PI/180, 195 * Math.PI/180, false, 'black');
    let shape11 = Object.create(Circle);
    shape11.init(mycv1, 80, 90, 40, 90 * Math.PI/180, 345 * Math.PI/180, true, 'black');
    
    // put in array
    shapes.push(shape1);
    shapes.push(shape2);
    shapes.push(shape3);
    shapes.push(shape4);
    shapes.push(shape5);
    shapes.push(shape6);
    shapes.push(shape7);
    shapes.push(shape8);
    shapes.push(shape9);
    shapes.push(shape10);
    shapes.push(shape11);
    repeater(mycv1, shapes);
}

let redraw = function (cv, arr) {
    /* clear and redraw canvas from an array */
    cv.clear();
    cv.prep();
    for (var i = 0; i < arr.length; i++) {
        arr[i].draw();
    }
}

let repeater = function (cv, arr) {
    /* if this is an animation build a setInterval loop here
     * if not, just draw
     */
    redraw(cv, arr);
}

let select = function (ev) {
    for (let i = 0; i < shapes.length; i++) {
        let cx = shapes[i].ctx;

        cx.beginPath();
        cx.rect(shapes[i].x, shapes[i].y, shapes[i].width, shapes[i].height);
        
        cx.arc(shapes[i].x, shapes[i].y, shapes[i].radius, shapes[i].sAngle, shapes[i].eAngle, shapes[i].rotation);
        cx.lineTo(shapes[i].lx1, shapes[i].ly1);
        cx.closePath();
        
        let bb = this.getBoundingClientRect();    // get canvas as std obj
        // convert mouse coordinates to canvas coordinates
        let x = (ev.clientX - bb.left) * (this.width / bb.width);
        let y = (ev.clientY - bb.top) * (this.height / bb.height);
        if (cx.isPointInPath(x, y)) {
            // we're in a loop, is this array element the 
            // one we clicked? If yes click in other canvas
            mycv2.canvas.addEventListener('click', function placeInRoom(e) {
                    let bb1 = this.getBoundingClientRect();    // yes
                    // other canvas as std object
                    // convert mouse coordinates to canvas coordinates
                    let x1 = (e.clientX - bb1.left) * (this.width / bb1.width);
                    let y1 = (e.clientY - bb1.top) * (this.height / bb1.height);
                    let obj = Object.create(Shape); // create new obj Shape
                    // with adapted properties
                    obj.init(mycv2, x1, y1, 
                                shapes[i].width, shapes[i].height,
                                shapes[i].color);
                    let obj2 = Object.create(Circle); // create new obj Circle
                    obj2.init(mycv2, x1, y1,
                                shapes[i].radius, shapes[i].sAngle, shapes[i].eAngle, shapes[i].rotation,
                                shapes[i].color);
                    othershapes.push(obj, obj2);
                    
                    mycv1.canvas.removeEventListener('click', select);
                    repeater(mycv2, othershapes);
                    mycv2.canvas.removeEventListener('click', placeInRoom);
                    mycv1.canvas.addEventListener('click', select);
                });
        } else {
            // window.alert("nohit: "+x+","+y);
        }
    }
}

let mycv1;
let mycv2;
let shapes = [];
let othershapes = [];

window.addEventListener('load', initialize);
