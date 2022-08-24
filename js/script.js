var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var height = canvas.height;
var width = canvas.width;
var unit = width / 400;
var arrow = new Pointer(unit * 50, unit * 60, "left");

function PointAtItem() {
  var try_typing = document.getElementById("myInput").value;
  if (try_typing != "") {
    var item_name = try_typing;
  }
  var item = [];
  var found_item = false;
  for (i = 0; i < items.length; i++) {
    if (items[i].name == item_name) {
      item = i;
      found_item = true;
    }
  }
  if (found_item == true) {
    arrow = new Pointer(
      items[item].x_pos,
      items[item].y_pos,
      items[item].direction
    );
    DrawTesco();
    arrow.DrawPointer();
  }
  search_reset_ready = true;
}

var items = [
  {
    name: "apples",
    x_pos: unit * 330,
    y_pos: unit * 335,
    direction: "up"
  },
  {
    name: "carrots",
    x_pos: unit * 235,
    y_pos: unit * 350,
    direction: "left"
  },
  {
    name: "onion",
    x_pos: unit * 40,
    y_pos: unit * 190,
    direction: "right"
  },
  {
    name: "cauliflower",
    x_pos: unit * 105,
    y_pos: unit * 245,
    direction: "right"
  },
  {
    name: "chilli",
    x_pos: unit * 300,
    y_pos: unit * 460,
    direction: "down"
  },
  {
    name: "tomato",
    x_pos: unit * 360,
    y_pos: unit * 450,
    direction: "right"
  },
  {
    name: "garlic",
    x_pos: unit * 230,
    y_pos: unit * 155,
    direction: "right"
  },
  {
    name: "ginger",
    x_pos: unit * 300,
    y_pos: unit * 250,
    direction: "left"
  },
  {
    name: "brinjal",
    x_pos: unit * 170,
    y_pos: unit * 230,
    direction: "right"
  },
  {
    name: "spanich",
    x_pos: unit * 360,
    y_pos: unit * 430,
    direction: "right"
  },
  {
    name: "brocolli",
    x_pos: unit * 360,
    y_pos: unit * 430,
    direction: "right"
  },
  {
    name: "mushroom",
    x_pos: unit * 235,
    y_pos: unit * 155,
    direction: "left"
  },
  {
    name: "cucumber",
    x_pos: unit * 40,
    y_pos: unit * 260,
    direction: "left"
  },
  {
    name: "radish",
    x_pos: unit * 170,
    y_pos: unit * 180,
    direction: "right"
  }
];

function PointAtItem() {
  var try_typing = document.getElementById("myInput").value;
  if (try_typing != "") {
    var item_name = try_typing;
  }
  var item = [];
  var found_item = false;
  for (i = 0; i < items.length; i++) {
    if (items[i].name == item_name) {
      item = i;
      found_item = true;
    }
  }
  if (found_item == true) {
    arrow = new Pointer(
      items[item].x_pos,
      items[item].y_pos,
      items[item].direction
    );
    DrawTesco();
    arrow.DrawPointer();
  }
  search_reset_ready = true;
}
