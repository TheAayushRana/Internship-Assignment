import { data } from "./data.js";

var table = document.getElementById("tabledata");
var header = table.createTHead();
var body = table.createTBody();
for (let i = 0; i < data.length; i++) {
  // to create new rows
  var newrow = i < 1 ? header.insertRow(i) : body.insertRow(i - 1);
  for (let j = 0; j < data[i].length; j++) {
    // to create new cells
    var newcell = newrow.insertCell(j);
    newcell.innerHTML = data[i][j];
  }
}
