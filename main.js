/*save user input from form to push into an array*/
let students = [];

const addStudent = (event) => {
  let student = {
    name: document.getElementById('studentName').value
  }
  students.push(student);
  document.forms[0].reset(); /*clear form for next name*/
  console.log(student)
}

const clickEvent = () => {
  document.querySelector('#sort-btn').addEventListener('click', addStudent);
};

const init = () => {
  clickEvent();
}

init();


/*const houses = [
  {
    student:'',
    type: Gryffindor
  },
  {
    student:'',
    type: Ravenclaw
  },
  {
    student:'',
    type: Slytherin
  },
  {
    student:'',
    type: Hufflepuff
  }
],

const printToDom = (selector, text*/
