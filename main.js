// Need to jump to the student form when "start sorting" button is clicked.
document.getElementById('start-sort').addEventListener('click', function() {
  document.getElementById('container-jumbotron').hidden = true;
  document.getElementById('container-form').hidden = false;
}, false);

// Empty array to store students.
let students = [];
let studentId = 0;

// Array used to store the four houses.
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
    id: studentId
  };

  studentId++
  students.unshift(newStudent);
  createStudentCards(students);
};

// Utility function created below.
const printToDom = (selector, textToPrint) => {
  document.querySelector(selector).innerHTML = textToPrint;
}

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
      domString += `<div style="margin: 0px 30px 50px">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">${student.name}</h5>
                          <p class="card-text">${student.house}</p>
                          <a href="#" id="${student.id}" class="btn btn-primary">Expel</a>
                        </div>
                      </div>
                    </div>`;
    };

  printToDom('#container-card', domString);
};

const init = () => {
  document.getElementById('startSort').addEventListener('click', sortStudent);
};

init();
