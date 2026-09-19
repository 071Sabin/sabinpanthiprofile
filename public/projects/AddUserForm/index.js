const a1 = [];

const input_namee = document.getElementById("name");
const input_college = document.getElementById("college");
const input_faculty = document.getElementById("faculty");

const btn1 = document.getElementById("btn1");

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li class="bg-blue-200 p-2 rounded-lg"><strong>Name:</strong> ${arr[i][0]} <br> <strong>College:</strong> ${arr[i][1]} <br> <strong>Faculty:</strong> ${arr[i][2]} <br> <button class="bg-blue-500 text-white p-2 mt-2 rounded-lg hover:bg-blue-700 mx-auto">Delete</button></li>`;
  }
  return items;
}

function displayItems() {
  document.getElementById("listItems").innerHTML = `
        <ul class="m-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            ${createListItems(a1)}
        </ul>
    `;
  // console.log("done");
}

displayItems();

btn1.addEventListener("click", function () {
  const namee = input_namee.value || "";
  const college = input_college.value || "";
  const faculty = input_faculty.value || "";

  if (namee === "" || college === "" || faculty === "") {
    window.alert("Please fill all the field!!");
  } else {
    a1.push([namee, college, faculty]);
    input_college.value = "";
    input_faculty.value = "";
    input_namee.value = "";
    // console.log(a1);

    displayItems();
  }
});

// a1.forEach(element => {
//     console.log(element);
// });
