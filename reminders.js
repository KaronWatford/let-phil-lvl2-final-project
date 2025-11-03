// ===== REMINDERS JS =====

// Grab the elements from the DOM
const form = document.getElementById('reminder-form');   // The form element
const textInput = document.getElementById('reminder-text'); // Input for reminder text
const timeInput = document.getElementById('reminder-time'); // Input for reminder time
const remindersList = document.getElementById('reminder-list'); // The <ul> that will hold reminders

// Load saved reminders from localStorage, or start with empty array
let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

// Function to render all reminders in the list
function renderReminders() {
    remindersList.innerHTML = ''; // Clear current list

    reminders.forEach((reminder, index) => {
        const li = document.createElement('li'); // Create list item
        li.textContent = `${reminder.text} @ ${reminder.time}`; // Show text and time

        // Create delete button for each reminder
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', () => {
            // Remove the reminder from the array
            reminders.splice(index, 1);
            updateStorage(); // Save changes and re-render
        });

        li.appendChild(deleteBtn); // Attach delete button to li
        remindersList.appendChild(li); // Add li to the ul
    });
}

// Function to update localStorage and refresh the display
function updateStorage() {
    localStorage.setItem('reminders', JSON.stringify(reminders));
    renderReminders();
}

// Handle adding a new reminder when form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const text = textInput.value.trim(); 
    const time = timeInput.value; 
 
    if (text === '' || time === '') return;
 
    reminders.push({ text, time });
 
    updateStorage();
 
    form.reset();
});

// Render reminders when the page loads
renderReminders();