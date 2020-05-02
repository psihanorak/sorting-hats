/*save user input from form to push into an array*/
var students = [];

const addStudent = (event) => {
  let student = {
    name: document.getElementById('studentName').value
  }
  students.push(student);
  document.forms[0].reset(); /*clear form for next name*/
  console.log(student)
}

/*create array for houses*/
const house = [
  {
    name: '${students}',
    type: 'Gryffindor'
  },
  {
    name: '${students}',
    type: 'Ravenclaw'
  },
  {
    name: '${students}',
    type: 'Slytherin'
  },
  {
    name: '${students}',
    type: 'Hufflepuff'
  },
  {
    name: '${students}',
    type: 'Gryffindor'
  },
  {
    name: '${students}',
    type: 'Ravenclaw'
  },
  {
    name: '${students}',
    type: 'Slytherin'
  },
  {
    name: '${students}',
    type: 'Hufflepuff'
  }
];

const printToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildHouse = (array) => {
  let domString = '';

  for (let i = 0; i < array.length; i++) {
    domString += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${house[i].name}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${house[i].type}</h6>
                      <button type="button" id="expel-btn" class="btn btn-primary btn-sm">Expel</button>
                    </div>
                  </div>`;
  }

  printToDom('#container-card', domString);
}

const clickEvent = () => {
  document.querySelector('#sort-btn').addEventListener('click', addStudent);
};

const init = () => {
  buildHouse(house);
  clickEvent();
}

init();
