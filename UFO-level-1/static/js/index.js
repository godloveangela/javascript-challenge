// from data.js
var tableData = data;
// YOUR CODE HERE!
// render table content
renderTable(tableData);
function renderTable(tableData) {
  var tableDom = document.getElementById("table-content");
  tableDom.getElementsByTagName("tbody")[0].innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var date = tableData[i].datetime;
    var city = tableData[i].city;
    var state = tableData[i].state;
    var country = tableData[i].country;
    var shape = tableData[i].shape;
    var duration = tableData[i].durationMinutes;
    var comments = tableData[i].comments;
    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + date + "</td>" +
      "<td> " +  city + " </td>" +
      "<td> " +  state + " </td>" +
      "<td> " +  country + " </td>" +
      "<td> " +  shape + " </td>" +
      "<td> " +  duration + " </td>" +
      "<td> " +  comments + " </td>";
    tableDom.getElementsByTagName("tbody")[0].appendChild(tr);
  }
}

var filtetBtn = document.getElementById("filter-btn");
filtetBtn.onclick = function() {
  var datetime = document.getElementById("datetime").value;
  if (datetime) {
    var tableDataList = [];
    for (var i = 0; i < tableData.length; i++) {
      if (tableData[i].datetime == datetime) {
        tableDataList.push(tableData[i]);
      }
    }
    renderTable(tableDataList);
  }
}