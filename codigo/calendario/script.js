let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const diadesemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

function openModal(date) {
  clicked = date;

  const eventForDay = events.find(e => e.date === clicked);

  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';
}

function load() {
  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('pt-br', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = diadesemana.indexOf(dateString.split(', ')[0]) + 1;

  document.getElementById('meses').innerText = 
    `${dt.toLocaleDateString('pt-br', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  let row = document.createElement('div');
  row.classList.add('row');

  let dayCount = 1;
  for(let i = 1; i <= 6; i++) {
    for (let j = 0; j < 7; j++) {
      const daySquare = document.createElement('div');
      daySquare.classList.add('day');

      if (i === 1 && j < paddingDays) {
        daySquare.classList.add('padding');
      } else if (dayCount <= daysInMonth) {
        daySquare.innerText = dayCount;
        const dayString = `${month + 1}/${dayCount}/${year}`;
        const eventForDay = events.find(e => e.date === dayString);

        if (dayCount === day && nav === 0) {
          daySquare.id = 'currentDay';
        }

        if (eventForDay) {
          const eventDiv = document.createElement('div');
          eventDiv.classList.add('event');
          eventDiv.innerText = eventForDay.title;
          daySquare.appendChild(eventDiv);
        }

        daySquare.addEventListener('click', () => openModal(dayString));
        dayCount++;
      }

      row.appendChild(daySquare);
    }

    calendar.appendChild(row);
    row = document.createElement('div');
    row.classList.add('row');

    if (dayCount > daysInMonth) {
      break;
    }
  }
}


function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}

function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');

    events.push({
      date: clicked,
      title: eventTitleInput.value,
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('proximo').addEventListener('click', () => {
    nav++;
    load();
  });

  document.getElementById('anterior').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('salvar').addEventListener('click', saveEvent);
  document.getElementById('cancelar').addEventListener('click', closeModal);
  document.getElementById('deletar').addEventListener('click', deleteEvent);
  document.getElementById('fechar').addEventListener('click', closeModal);
}

initButtons();
load();
