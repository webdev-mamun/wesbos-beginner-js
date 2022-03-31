const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");

//Setup canvas for drawing
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(300, 400);
ctx.stroke();

console.log(ctx);
