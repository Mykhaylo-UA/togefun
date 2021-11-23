const buttonTaskMore = document.querySelectorAll(".task-more");

for(let i = 0; i < buttonTaskMore.length; i++){
    buttonTaskMore[i].addEventListener('click', ()=>{
        buttonTaskMore[i].parentElement.nextElementSibling.classList.toggle('task-detail-show');
    });
}

/*const buttonMenu = document.querySelector(".button-burger");
const menu = document.querySelector('.menu');

buttonMenu.addEventListener('click', () => {
  menu.classList.toggle("menu-open");
  menu.classList.toggle("menu-close");
});

const progressTime = document.querySelector(".progress-time");
const progressCircle = document.querySelector(".progress circle");
let seconds = 1*60;
const strokeDashoffset = 1195;
const impOneSecond = strokeDashoffset / (seconds)

setInterval(()=>{
    seconds--;
    progressTime.textContent = `${Math.floor(seconds/60)}:${seconds%60}`;
    progressCircle.style.strokeDashoffset = progressCircle.style.strokeDashoffset=="" ? strokeDashoffset-impOneSecond : parseFloat(progressCircle.style.strokeDashoffset)-impOneSecond;
}, 1000)

const labels = ["Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 20, 30, 10, 60, 20, 35],
      borderColor: "#9747FF",
      backgroundColor: "#9747FF",
    }
  ]
};
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart'
      }
    }
  },
};

const myChart = new Chart(
    document.getElementById('first-chart'),
    config
  );


const data2 = {
  labels: labels,
  datasets: [
    {
      label: 'Fully Rounded',
      data: [10,4,6,3,4,5,2],
      borderColor: "#9747FF",
      backgroundColor: "#9747FF",
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'Small Radius',
      data: [5,5,10,2,3,4,5],
      borderColor: "#FFC700",
      backgroundColor: "#FFC700",
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ]
};
const config2 = {
    type: 'bar',
    data: data2,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };

  const myChart2 = new Chart(
    document.getElementById('second-chart'),
    config2
  );

*/
