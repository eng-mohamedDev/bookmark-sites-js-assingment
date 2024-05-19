// Inputes
var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");

// Btn
var addBtn = document.getElementById("addBtn");

// Table
var myData = document.getElementById("myData");

// Data Store:
var bookMarks = [];

// 4- Show data always from localStorage:
if (localStorage.getItem("bookMarksSites")) {
  bookMarks = JSON.parse(localStorage.getItem("bookMarksSites"));
  display();
}

// 1- Display data in table:
function display() {
  // temp to be showen:
  var temp = "";

  // looping through the array to show its data in the table from the objs within the array
  for (var i = 0; i < bookMarks.length; i++) {
    temp +=
      `
    <tr>
    <td>` +
      i +
      `</td>
    <td>` +
      bookMarks[i].bookMarkName +
      `</td>

    <td>
      <a href="` +
      bookMarks[i].bookMarkURL +
      `" class="btn btn-success"><i class="fa-solid fa-eye me-2"></i>Visite</a>
    </td>
    <td>
      <button class="btn btn-danger" onclick="deleteBookMark(` +
      i +
      `)">Delete</button>
    </td>
  </tr>
    `;
  }

  myData.innerHTML = temp;
}

// 2- Add data to table:
function addBookMarks() {
  // 6- Checking siteName Validation.

  if (
    siteURL.value.toLowerCase().startsWith("www.") ||
    siteURL.value.toLowerCase().endsWith(".com")
  ) {
    var bookMarksData = {
      bookMarkName: siteName.value,
      bookMarkURL: siteURL.value,
    };
    siteName.value = "";
    siteURL.value = "";

    bookMarks.push(bookMarksData);
    localStorage.setItem("bookMarksSites", JSON.stringify(bookMarks));
    display();
  }
}

// 3- Deleting data from table and array:
function deleteBookMark(i) {
  bookMarks.splice(i, 1);
  localStorage.setItem("bookMarksSites", JSON.stringify(bookMarks));
  display();
}

siteURL.onkeyup = function () {
  if (
    siteURL.value.toLowerCase().startsWith("www.") ||
    siteURL.value.toLowerCase().endsWith(".com")
  ) {
    siteURL.classList.add("is-valid");
    siteURL.classList.remove("is-invalid");
  } else {
    siteURL.classList.add("is-invalid");
    siteURL.classList.remove("is-valid");
  }
};
siteName.onkeyup = function () {
  if (siteName.value.length > 0) {
    siteName.classList.add("is-valid");
    siteName.classList.remove("is-invalid");
  } else {
    siteName.classList.add("is-invalid");
    siteName.classList.remove("is-valid");
  }
};
