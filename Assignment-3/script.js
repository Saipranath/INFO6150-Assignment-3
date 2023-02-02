//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

//Starting my code from here...
var count = 3;
var checkCount = 0;
console.log(checkCount);
/*var col = document.getElementsByClassName("collapse");
  console.log(col);
  var i;

  for (i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.parentElement.parentElement.nextElementSibling;
      console.log(content);
      if (content.style.display === "table-row") {
        content.style.display = "none";
      } else {
        content.style.display = "table-row";
      }
    });
  }*/

function addNewRow() {
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var last =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML;
  console.log(last);
  var lastStudent =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var lastestIndex = lastStudent.split(" ")[1];
  var tdNode = document.createElement("tr");
  var trCheckboxCell = document.createElement("td");
  trCheckboxCell.innerHTML =
    '<input type="checkbox" onclick="onCheckBoxClick(this)"/><br /><br /><img src="down.png" width="25px" onclick="toggleDetails(this)"/>';
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(lastestIndex) + 1);
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(lastestIndex) + 1);
  var trApprovedCell = document.createElement("td");
  trApprovedCell.innerHTML = "Approved ";
  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Spring ";
  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA ";
  var trBudgetCell = document.createElement("td");
  trBudgetCell.innerHTML = "12345 ";
  var trPercentageCell = document.createElement("td");
  trPercentageCell.innerHTML = "100% ";
  /*var tdANode = document.createElement("tr");
  tdANode.className = "dropDownTextArea";
  var trDropDownArea = document.createElement("td");
  trDropDownArea.colSpan = 8;
  trDropDownArea.innerHTML =
    "Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />";

    */
  tdNode.appendChild(trCheckboxCell);
  tdNode.appendChild(trStudentCell);
  tdNode.appendChild(trTeacherCell);
  tdNode.appendChild(trApprovedCell);
  tdNode.appendChild(trSemesterCell);
  tdNode.appendChild(trTypeCell);
  tdNode.appendChild(trBudgetCell);
  tdNode.appendChild(trPercentageCell);
  //tdANode.appendChild(trDropDownArea);

  tbodyRef.appendChild(tdNode);
  //tbodyRef.appendChild(tdANode);

  alert("Record added successfully...");

  

}



//delete Heading
    /*var deleteHeading = document.createElement("th");
    deleteHeading.innerHTML = "DELETE";
    dlast.appendChild(deleteHeading);
    dtbodyRef.appendChild(dlast);*/


function onCheckBoxClick(checkbox) {
  var rowSelect = checkbox.parentElement.parentElement;
  var editSelect = checkbox.parentElement.parentElement.parentElement.firstElementChild;
  console.log(editSelect);
  console.log(rowSelect);
  
  //console.log(checkCount);
  if (checkbox.checked == true) {
    checkCount = checkCount+1;
    rowSelect.style.backgroundColor = "yellow";
    
    console.log(checkCount);
    //delete button
    
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteId");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    rowSelect.appendChild(deleteButton);
    //edit button
    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editID");
    editButton.innerHTML =
      '<button id="edit" type="button" onclick="editRow()">Edit</button>';
    rowSelect.appendChild(editButton);
    if(checkCount>0){
    document.getElementById("button").disabled=false;
    document.getElementById("button").style.backgroundColor = "orange";
    document.getElementById("button").style.border = "orange";
    console.log(document.getElementById("button"));}

    //delete heading
     //var delHeading = document.getElementsByClassName("hide")[0];
     //console.log(delHeading);
     //delHeading.style.display = "flex";
     //delHeading.style.margin = "";

     //edit heading
    // var editHeading = document.getElementsByClassName("hide")[1];
    // console.log(editHeading);
     //editHeading.style.display = "inline";
     if(checkCount==1){
     var delHeading = document.createElement("th");
     delHeading.innerHTML = "DELETE";
    editSelect.appendChild(delHeading);
    
    //Edit Heading
    var editHeading = document.createElement("th");
    editHeading.innerHTML = "EDIT";
    editSelect.appendChild(editHeading);

    
     }

    

  } else {
    rowSelect.style.backgroundColor = "#fff";
    
    document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").style.border = "grey";
    document.getElementById("button").disabled=true;
    console.log(document.getElementById("button"));
    if(checkCount==1){
    editSelect.deleteCell(8);
    editSelect.deleteCell(8);}
    rowSelect.deleteCell(8);
    rowSelect.deleteCell(8);
    checkCount--;
    console.log(checkCount);
  }
}

function toggleDetails(toggle) {
  var row = toggle.parentElement.parentElement;

  var table = document.getElementById('myTable');
  console.log(row.nextElementSibling);

  if (row.nextElementSibling) {
    if (row.nextElementSibling.innerHTML.toLowerCase().includes('advisor') == false) {
      var tr = table.insertRow(row.rowIndex + 1);
      tr.setAttribute("class", "dropDownTextArea");
      tr.setAttribute("id", row.rowIndex);
      tr.innerHTML = '<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>';
    } else {
      table.deleteRow(row.rowIndex + 1);
    }
  } else {
    var tr = table.insertRow(row.rowIndex + 1);
    tr.setAttribute("class", "dropDownTextArea");
    tr.setAttribute("id", row.rowIndex);
    tr.innerHTML = '<td colspan="8">Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br /></td>';
  }
}

function deleteRow(rowObject) {
  var entireRow = rowObject.parentElement.parentElement;
  var advisorRow = rowObject.parentElement.parentElement.nextElementSibling;
  console.log(entireRow);
  console.log(advisorRow);
  document.getElementById("myTable").deleteRow(advisorRow.rowIndex);
  document.getElementById("myTable").deleteRow(entireRow.rowIndex);
  alert("Record deleted successfully...");
  //col.shift();
  checkCount--;
  console.log(checkCount);
  if(checkCount==0){
    var dtable = document.getElementById("myTable");
var dtbodyRef = document.getElementsByTagName("tbody")[0];
var dlast = dtable.firstElementChild.firstElementChild;
dlast.deleteCell(8);
dlast.deleteCell(8);
console.log(dlast);
  document.getElementById("button").style.backgroundColor = "grey";
    document.getElementById("button").style.border = "grey";
    document.getElementById("button").disabled=true;
    console.log(document.getElementById("button"));

  }
}

function editRow()
{
  window.prompt("Edit the details..");
}

