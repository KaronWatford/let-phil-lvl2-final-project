const calendarGrid = document.getElementById('calendar-grid');
const monthYear = document.getElementById('month-year');
const prevBtn = document.getElementById('prev-month');
const nextBtn = document.getElementById('next-month');

let currentDate = new Date();

// Destructuring example

function renderCalendar(date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    
    // Update header
    monthYear.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear previous calendar
    calendarGrid.innerHTML = '';

    // Calculate first day and number of days in month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    // Add blank divs for empty days at start
    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement('div');
        calendarGrid.appendChild(emptyDiv);
    }

    // Add day divs
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.textContent = day;

        const today = new Date();
        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayDiv.classList.add('today');
        }

        dayDiv.addEventListener('click', () => {
            alert(`Selected: ${day} ${date.toLocaleString('default', {month: 'long' })} ${year}`);
        });

        calendarGrid.appendChild(dayDiv);
    }
}

// Previous and Next month buttons
prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);