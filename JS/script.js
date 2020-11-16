console.log("JS file connected");

const canvas = document.getElementById("practice");
const context = canvas.getContext("2d");

function drawFillRectangle() {
  context.fillStyle = "purple";
  context.fillRect(50, 400, 70, 70);
}

function strokeRect() {
  context.lineWidth = 10;
  context.strokeStyle = "yellow";
  context.strokeRect(220, 300, 60, 60);

}

function drawRectPath() {
  context.beginPath();

  context.lineWidth = 1;
  context.strokeStyle = "green";
  
  context.moveTo(100, 10);
  context.lineTo(300, 10);

  context.moveTo(300, 10);
  context.lineTo(300, 200);

  context.moveTo(300, 200);
  context.lineTo(100, 200);

  context.moveTo(100, 200);
  context.lineTo(100, 10);
  context.stroke();

  context.closePath();
}

function drawBullsEye() {
  context.beginPath();

  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.arc(350, 250, 50, 0, Math.PI * 2);

  context.stroke();
  context.closePath();

  context.beginPath();

  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.arc(350, 250, 25, 0, Math.PI * 2);

  context.stroke();
  context.closePath();

  context.beginPath();

  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.arc(350, 250, 5, 0, Math.PI * 2);

  context.stroke();
  context.closePath();
}

function drawText() {
  context.fillStyle = "blue";
  context.font = "30px sans-serif";
  context.fillText("Ironhack", 300, 475);
}
