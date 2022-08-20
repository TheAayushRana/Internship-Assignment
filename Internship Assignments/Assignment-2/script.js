import { data } from "./data.js";

let table = document.getElementById("tabledata");
let header = table.createTHead();
let body = table.createTBody();

for (let i = 0; i < data.length + 1; i++) {
  // to create new rows
  let newrow = i < 2 ? header.insertRow(i) : body.insertRow(i - 2);
  let newi = i == 0 || i == 1 ? 0 : i - 1;
  for (let j = 0; j < data[newi].length; j++) {
    // to create new cells
    let newcell = newrow.insertCell(j);
    if (i == 0 && j == 8) {
      newcell.colSpan = "3";
      newcell.innerHTML = "Energy Consumed";
    } else if (i == 1) {
      newcell.innerHTML = " ";
      if (j == 8 || j == 9 || j == 10) {
        newcell.innerHTML = data[0][j];
      }
    } else {
      newcell.innerHTML = data[newi][j];
    }
  }
}
