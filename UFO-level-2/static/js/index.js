// from data.js
var tableData = data;
// YOUR CODE HERE!
// render table content
renderTable(tableData);
initFilterSelect();

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
      "<td>" +
      date +
      "</td>" +
      "<td> " +
      city +
      " </td>" +
      "<td> " +
      state +
      " </td>" +
      "<td> " +
      country +
      " </td>" +
      "<td> " +
      shape +
      " </td>" +
      "<td> " +
      duration +
      " </td>" +
      "<td> " +
      comments +
      " </td>";
    tableDom.getElementsByTagName("tbody")[0].appendChild(tr);
  }
}

var filtetBtn = document.getElementById("filter-btn");
filtetBtn.onclick = function () {
  var filterObj = {};
  filterObj.datetime = document.getElementById("datetime").value;
  filterObj.city = document.getElementById("city").value;
  filterObj.state = document.getElementById("state").value;
  filterObj.country = document.getElementById("country").value;
  filterObj.shape = document.getElementById("shape").value;
  var tableDataList = [];
  for (var i = 0; i < tableData.length; i++) {
    var flag = true;
    for(var j in filterObj) {
      var value = filterObj[j];
      if(value && (tableData[i][j] !== value)) {
        flag = false;
      }
    }
    if (flag) tableDataList.push(tableData[i]);
  }
  renderTable(tableDataList);
};

function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

function initFilterSelect() {
  var city = [];
  var state = [];
  var country = [];
  var shape = [];
  for (var i = 0; i < tableData.length; i++) {
    city.push(tableData[i].city);
    state.push(tableData[i].state);
    country.push(tableData[i].country);
    shape.push(tableData[i].shape);
  }
  city = unique(city);
  state = unique(state);
  country = unique(country);
  shape = unique(shape);
  renderSelect(city, "city");
  renderSelect(state, "state");
  renderSelect(country, "country");
  renderSelect(shape, "shape");
}

function renderSelect(arr, id) {
  var idDom = document.getElementById(id);
  idDom.innerHTML = "";
  var firstOption = "<option value=''></option>";
  idDom.innerHTML += firstOption;
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.innerHTML = "<option value='" + arr[i] + "'>" + arr[i] + "</option>";
    idDom.appendChild(option);
  }
}
