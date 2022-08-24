var ITEM_NAMES = [];
function createItemlist() {
  for (var i = 0; i < items.length; i++) {
    ITEM_NAMES.push(items[i].name);
  }
}
createItemlist();
var search_reset_ready = false;

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("click", function(e) {
    if (search_reset_ready == true) {
      inp.value = "";
      closeAllLists();
      search_reset_ready = false;
    }
  });
  inp.addEventListener("input", function(e) {
    var a,
      b,
      i,
      val = this.value;
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    a = document.createElement("div");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("div");
        b.innerHTML =
          "<strong>" +
          arr[i].substr(0, val.length) +
          "</strong>" +
          arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.value = arr[i];
        b.addEventListener("click", function(e) {
          inp.value = this.value;
          PointAtItem();
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      if (currentFocus != -1) {
        inp.value = x[currentFocus].value;
      }
      closeAllLists(x);

      PointAtItem();
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) {
      currentFocus = 0;
    }
    if (currentFocus < 0) currentFocus = x.length - 1;
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("myInput"), ITEM_NAMES);
