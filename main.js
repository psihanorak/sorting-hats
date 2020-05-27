// Need to jump to the student form when "start sorting" button is clicked.
document.getElementById('container-buttons').hidden = true;
document.getElementById('container-form').hidden = true;
document.getElementById('start-sort').addEventListener('click', function() {
  document.getElementById('container-jumbotron').hidden = true;
  document.getElementById('container-form').hidden = false;
  document.getElementById('container-buttons').hidden = false;
}, false);

// Empty array to store students and army.
let students = [];

// Array of the houses that the students will be assigned.
const houses = ['Gryffindor','Ravenclaw', 'Slytherin', 'Hufflepuff'];

// Generates a random house to assign the student once they submit their name in the form.
const randomHouse = () => {
  const house = Math.floor(Math.random() * 4);
  return houses[house];
  }

// Create a new student once the input is captured and add into the student array and create student card.
const createNewStudent = () => {
  const name = document.getElementById('studentName').value;
  
  const newStudent = {
    name: name,
    house: randomHouse(),
    id: `${Date.now()}`
  };
  
  students.unshift(newStudent);
  createStudentCards(students);
}

// Utility functions.
const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

// Find the index of the student by their unique ID.
const getStudentIndexById = studentId => students.findIndex(student => student.id === studentId);

// Button events to allow looping within the DOM string.
const clickEventAttachment = (selector, functionToAttach) => {
  const buttons = document.querySelectorAll(selector);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', functionToAttach);
  }
};

// Sorts a student into a random house or notifies the user to enter their name.
const sortStudent = () => {
  if (document.getElementById('studentName').value === '') {
    alert('Please enter your name in order to be placed into a school!');
  } else {
    createNewStudent();
    document.getElementById('studentName').value = '';
  }
};

// DOM string to loop students into and build the cards.
const createStudentCards = (studentCollection) => {
  let domString = '';

    for (let i = 0; i < studentCollection.length; i++) {
      const student = studentCollection[i]
      domString += `<div style="margin: 0px 30px 0px">
                      <div id="${student.id}" class="card">
                        <div class="card-body">
                          <h5 class="card-title">${student.name}</h5>
                          <p class="card-text ${student.house}">${student.house}</p>
                          <a href="#" class="btn btn-primary expel-student">Expel</a>
                        </div>
                      </div>
                    </div>`;
    };
  console.log(students);
  printToDom('#container-student', domString);

  clickEventAttachment('.expel-student', expelStudent)
};

// Event functions.
const clickEvents = () => {
  document.getElementById('startSort').addEventListener('click', sortStudent);
};

const expelStudent = (e) => {
  const studentId = e.target.closest('.card').id;
  students.splice(getStudentIndexById(studentId), 1);
  createStudentCards(students);
};

const allHousesButton = document.getElementById('all');
const gryffindorButton = document.getElementById('gryffindor');
const ravenclawButton = document.getElementById('ravenclaw');
const slytherinButton = document.getElementById('slytherin');
const hufflepuffButton = document.getElementById('hufflepuff');
const voldermortButton = document.getElementById('voldermort');

// Sort cards by houses.
const filterHouses = (house) => {
  const filteredHouse = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === house) {
      filteredHouse.push(students[i])
    }
  }
  createStudentCards(filteredHouse);
}

allHousesButton.addEventListener('click', function() {
  createStudentCards(students)
})

gryffindorButton.addEventListener('click', function() {
  filterHouses('Gryffindor')
})

ravenclawButton.addEventListener('click', function() {
  filterHouses('Ravenclaw')
})

slytherinButton.addEventListener('click', function() {
  filterHouses('Slytherin')
})

hufflepuffButton.addEventListener('click', function() {
  filterHouses('Hufflepuff')
})

voldermortButton.addEventListener('click', function() {
  filterHouses('Voldermort')
})

const init = () => {
  clickEvents();
};

init();
