import "./style.css";

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let monthNames = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];

document.getElementById("prevMonth").addEventListener("click", () => previous());
document.getElementById("nextMonth").addEventListener("click", () => next());

function showCalendar(month, year) {
  let firstDay = (new Date(year, month).getDay() + 6) % 7; // Make Monday (0), Sunday (6)
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body");
  tbl.innerHTML = "";

  document.getElementById("monthAndYear").innerText = monthNames[month] + " " + year;

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");
      if (i === 0 && j < firstDay) {
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
          cell.classList.add("current-date"); // Highlight the current date
        }
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
}


function previous() {
  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function next() {
  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

showCalendar(currentMonth, currentYear);


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
});

// Oirearviokyselyn toiminnallisuudet
const surveyModal = document.getElementById("survey-modal");
const formMental = document.getElementById('survey-form-mental');
const formPhysical = document.getElementById('survey-form-physical');
const button = document.getElementById("openArvioKyselyModal");
const closeButton = document.querySelector(".close-button");

button.onclick = function() {
  surveyModal.style.display = "block";
  formMental.style.display = "block"; 
  formPhysical.style.display = "none";
};

document.querySelector('.next-button').addEventListener('click', function() {
  formMental.style.display = 'none';
  formPhysical.style.display = 'block';
});

document.querySelector('.prev-button').addEventListener('click', function() {
  formPhysical.style.display = 'none';
  formMental.style.display = 'block';
});


closeButton.onclick = () => (surveyModal.style.display = "none");

window.onclick = (event) => {
  if (event.target === surveyModal) {
    surveyModal.style.display = "none";
  }
};

formMental.addEventListener("submit", submitForm1);

function submitForm1() {
  console.log("toimii");
}

const button2 = document.getElementById("openElamantapaKyselyModal");

button2.onclick = function() {
  sleepModal.style.display = "block";
}

const form2 = document.getElementById("sleep-form");
form2.addEventListener("submit", submitForm2);

const sleepModal = document.getElementById("sleep-modal");
const closeButton2 = document.querySelector(".close-button2");

closeButton2.onclick = () => {
    sleepModal.style.display = "none";
};

function submitForm2() {
  console.log("elämantapa modal toimii");
}