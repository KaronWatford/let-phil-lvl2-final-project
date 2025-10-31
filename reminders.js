const form = document.getElementById('reminder-form;');
const textInput = document.getElementById('reminder-text');
const timeInput = document.getElementById('reminder-time');
const remindersList = document.getElementById('reminder-list');

let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

function renderReminders () {
    remindersList.innerHTML = '';
    reminders.forEach (reminders, index => {
        const li = document.createElement('li');
        li.textContent = `${reminders.text} @ ${reminders.time}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.addEventListener('click', () => {
           reminders.splice(index,1);
            updateStorage();
        })
        
        li.appendChild(deleteBtn);
        reminderList.appendChild(li);

        // Set up notification if time is in the future
        const [hours, minutes] =  reminders.time.split(':');
          const now =  new Date();
          const alertTime =  new Date();
          alertTime.setHours(hours, minutes, 0, 0);
          
          if (alertTime > now) {
            const timeout =  alertTime - now;
            setTimeout(() => alert= (`Reminder: ${reminders.text}`), timeout);
        } 
    }); 
}

function updateStorage () {
    localStoragesetItem('reminders', JSON.stringify(reminders));
    renderReminders();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    reminders.push({
        text: textInput.value.trim(),
        time: timeInput.value });
        textInput.value = '';
        timeInput.value = '';
        updateStorage();
    });

    renderReminders(); 