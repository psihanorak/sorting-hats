//empty student array and unique Id
let studentArr = [];
let uniqueId = 0;

//array of schools
const houses = ['Gryffindor','Ravenclaw', 'Slytherin', 'Hufflepuff'];


//function to assign a random house to a student
const randomHouse = () => {
  const house = Math.floor(Math.random() * 4);
  return houses[house];
}

//function that adds a student once it is passed through the input
const addStudents = () => {
  const studentName = document.getElementById('studentName').value;
    studentArr.unshift(
    {
      name: studentName,
      house: randomHouse(),
      id: uniqueId
    }
    );

    uniqueId++
    buildCards(studentArr)
}

const enteredName = () => {
  if (document.getElementById('studentName').value === "") {
    alert('Please enter your name in order to be placed into a school!');
  } else {
    addStudents();
    document.getElementById('studentName').value = "";
  }
}

//print to domString
const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildCards = (collection) => {
  let domString = '';

  for (let i = 0; i < collection.length; i++) {
    domString = `<div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">${collection[i].name}</h5>
                      <p class="card-text">${collection[i].house}</p>
                      <a href="#" class="btn btn-primary">Expel</a>
                    </div>
                  </div>
                </div>`;
  }

  printToDom('#container-card', domString);
}

//click event when sorting button is pressed to sort students to random house and check to see if input field is not empty
const clickEvent = () => {
  document.querySelector('#startSort').addEventListener('click', enteredName);
}

const init = () => {
  buildCards(studentArr);
  clickEvent();
}

init();
