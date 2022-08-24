var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;
var unit = width / 400;
function Pointer(arrow_x_position, arrow_y_position, arrow_direction) {
  this.x = arrow_x_position;
  this.y = arrow_y_position;
  this.arrow_size_unit = unit * 20;
  this.direction = arrow_direction;
  this.DrawPointer = function() {
    c.fillStyle = "red";
    c.beginPath();
    c.moveTo(this.x, this.y);

    if (this.direction == "right") {
      c.lineTo(this.x + this.arrow_size_unit / 2, this.y);
      c.lineTo(
        this.x + (this.arrow_size_unit * 4) / 5,
        this.y + this.arrow_size_unit / 6
      );
      c.lineTo(
        this.x + this.arrow_size_unit / 2,
        this.y + this.arrow_size_unit / 3
      );
      c.lineTo(this.x, this.y + this.arrow_size_unit / 3);
    } else if (this.direction == "left") {
      c.lineTo(this.x - this.arrow_size_unit / 2, this.y);
      c.lineTo(
        this.x - (this.arrow_size_unit * 4) / 5,
        this.y + this.arrow_size_unit / 6
      );
      c.lineTo(
        this.x - this.arrow_size_unit / 2,
        this.y + this.arrow_size_unit / 3
      );
      c.lineTo(this.x, this.y + this.arrow_size_unit / 3);
    } else if (this.direction == "down") {
      c.lineTo(this.x, this.y + this.arrow_size_unit / 2);
      c.lineTo(
        this.x + this.arrow_size_unit / 6,
        this.y + (this.arrow_size_unit * 4) / 5
      );
      c.lineTo(
        this.x + this.arrow_size_unit / 3,
        this.y + this.arrow_size_unit / 2
      );
      c.lineTo(this.x + this.arrow_size_unit / 3, this.y);
    } else if (this.direction == "up") {
      c.lineTo(this.x, this.y - this.arrow_size_unit / 2);
      c.lineTo(
        this.x + this.arrow_size_unit / 6,
        this.y - (this.arrow_size_unit * 4) / 5
      );
      c.lineTo(
        this.x + this.arrow_size_unit / 3,
        this.y - this.arrow_size_unit / 2
      );
      c.lineTo(this.x + this.arrow_size_unit / 3, this.y);
    }

    c.fill();
  };
}
