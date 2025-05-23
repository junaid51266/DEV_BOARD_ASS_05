// date and time


const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'May', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const today = new Date();
const todaysDate = today.getDate().toString();
const year = today.getFullYear().toString();
const month = months[today.getMonth()];


document.getElementById('today').innerText = days[today.getDay()] + ',';
document.getElementById('todays-date').innerText = month + "  " + todaysDate + "  " + year;



const cardBtns = document.querySelectorAll('button.card-btn');

for (let cardBtn of cardBtns) {
  cardBtn.addEventListener('click', function (event) {


    if (!event.target.classList.contains('opacity-20')) {
      alert('Board Updated Successfully')
      event.target.classList.add('opacity-20');

      //updating the taskLeft number
      let taskLeft = parseInt(document.getElementById('assigned-task-number').innerText);
      taskLeft--;
      document.getElementById('assigned-task-number').innerText = taskLeft;


      //updating the completedTaskNum number
      let completedTaskNum = parseInt(document.getElementById('completed-task-num').innerText);
      completedTaskNum++;

      document.getElementById('completed-task-num').innerText = completedTaskNum;

      //getting the press time
      const currentTime = new Date();
      const timeSTR = currentTime.toLocaleString("en-US").split(', ')[1];


      //taking the equivalent title
      let taskTitle = event.target.parentElement.previousElementSibling.previousElementSibling.innerText;
      para = "You have completed the task" + ' ' + taskTitle + ' at ' + timeSTR;

      //creating and styling p tag
      let p = document.createElement('p');
      p.classList.add('p-[10px]');
      p.classList.add('bg-[#F4F7FF]');
      p.classList.add('rounded-[8px]');
      p.classList.add('text-[rgba(0,0,0,.7)]');
      p.classList.add('task-para');
      p.innerText = para;


      let div = document.getElementById('completed-task');
      div.appendChild(p);


      // if all task completed it will show another alert....

      if (taskLeft === 0) {
        alert('Congrats!! You have completed all the tasks');
      }


    }

  })
}


document.getElementById('dlt-btn').addEventListener('click', function () {

  let completedTasks = document.getElementById('completed-task');
  let paras = document.querySelectorAll('.task-para');

  for (let para of paras) {
    completedTasks.removeChild(para);
  }


});

let a = 0;
document.getElementById('rainbow-btn').addEventListener('click', function () {

  a += 30;
  document.getElementById('rainbow-btn').style.transform = `rotate(${a}deg)`;
  let colorStr = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    color += colorStr[randomIndex];
  }

  document.body.style.backgroundColor = color;
  document.getElementsByTagName('main')[0].style.backgroundColor = color;


});