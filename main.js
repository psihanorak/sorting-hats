/*create alert window when no input is entered*/
function warning() {
  if (document.getElementById('studentName').value == "") {
    alert('Please enter your name in order to be assigned a house!');
    return false;  
  }
}

/*create array for houses*/
const house = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
const sortStudent = [];

const assignHouse = () => {
  let random = Math.floor(Math.random() * (house.length));
    document.getElementById('sort-btn').value = house[random];
    sortStudent.push(document.getElementById('studentName').value, (house[random]));
}

/*sort students*/
let students = [];
let studentIndex = 0;

const sortBtn = () => {
  if (warning() == true) {
    assignHouse ();
    let newStudent = {};
    newStudent ['name'] = document.getElementById('studentName').value;
    newStudent ['house'] = house[Math.floor(Math.random() * (house.length))];
    newStudent ['uniqueId'] = studentIndex;
    console.log(newStudent);
    students.push(newStudent);
    console.log(students);
    buildStudentCards(students);
    document.getElementById('studentName').value = null;
    studentIndex++
  }

}

/*create dom for cards*/
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildHouse = (students) => {
  let domString = '';

  for (let i = 0; i < students.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${students[i].name}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${students[i].house}</h6>
                      <button type="button" id=${students[i].uniqueId} class="btn btn-primary btn-sm">Expel</button>
                    </div>
                  </div>`;
  }

  printToDom('#container-card', domString);
}

const clickEvent = () => {
  document.querySelector('#sort-btn').addEventListener('click', sortBtn);
};

const init = () => {
  buildHouse
  clickEvent();
}

init();
