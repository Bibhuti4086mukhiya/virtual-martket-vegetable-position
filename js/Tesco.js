var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;
var unit = width / 400;

function DrawTesco() {
  c.fillStyle = "antiqueWhite";
  c.fillRect(unit * 270, unit * 5, unit * 40, unit * 40);
  c.fillRect(unit * 20, unit * 20, width - unit * 40, height - unit * 40);
  c.fillStyle = "rgb(180, 200, 230)";
  c.fillRect(unit * 196, unit * 480, unit * 200, unit * 70);
  c.fillRect(unit * 60, unit * 460, unit * 96, unit * 35);

  c.fillRect(unit * 60, unit * 135, unit * 25, unit * 280);

  c.fillRect(unit * 125, unit * 135, unit * 25, unit * 120);
  c.fillRect(unit * 125, unit * 280, unit * 25, unit * 135);

  c.fillRect(unit * 190, unit * 135, unit * 25, unit * 280);
  c.fillRect(unit * 255, unit * 135, unit * 25, unit * 280);

  c.fillRect(unit * 320, unit * 135, unit * 25, unit * 180);
  c.fillRect(unit * 320, unit * 340, unit * 25, unit * 75);
}
DrawTesco();
