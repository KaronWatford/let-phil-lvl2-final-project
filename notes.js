const noteInput = document.getElementById('note-input')
const saveBtn = document.getElementById('save-note');
const clearBtn = document.getElementById('note-status');
const noteStatus = document.getElementById('note-status');

// Load saved note
window.addEventListener('load', () => {
    const savedNote = localStorage.getItem('janus_note');
    if (savedNote) noteInput.value = savedNote;
});

// Save note
saveBtn.addEventListener('click', () => {
    localStorage.setItem('janus_note', noteInput.value.trim());
    noteStatus.textContent = 'Note saved.';
    setTimeout(() => (noteStatus.textContent = ''), 2000);
});

// Clear note
clearBtn.addEventListener('click', () => {
    noteInput.value = '';
    localStorage.removeItem('janus_note');
    noteStatus.textContent = 'Note cleared.';
    setTimeout(() => (noteStatus.textContent = ''), 2000);
});