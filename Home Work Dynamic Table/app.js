console.log("Dynamic Table");

function createTable() {
    let a;
  
    a = document.getElementById('tb1').value;
  
    if (a == "") {
      alert("Please enter some numeric value");
    } else {
      let rows = "<th>Item Name</th><th>Quantity</th><th>QuantityType</th><th>Amount</th>";
      for (var i = 0; i < a; i++) {
        rows += "<tr><td><input type='text' name='" + "name".concat(i+1) + "'></td><td><input type='text' name='" + "quantity".concat(i+1) + "'></td><td><input type='text' name='" + "qtype".concat(i+1) + "'></td><td id='amt'><input type='text' id='sum' onkeyup='myfunction(this.value);' name='" + "total".concat(i+1) + "'></td></tr>";
      }
  
      document.getElementById("table").innerHTML = rows;
    }
  }

  console.log(table);