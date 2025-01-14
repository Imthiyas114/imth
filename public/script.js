// public/script.js
const socket = io();

const input = document.getElementById('message-input');
const messages = document.getElementById('messages');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const message = input.value;
        socket.emit('chat message', message);
        input.value = '';
    }
});

socket.on('chat message', function (msg) {
    const item = document.createElement('li');
    if (msg.includes('Amina')) {
        const img = document.createElement('img');
        img.src = 'Screenshot 2024-04-25 232941.png';
        img.alt = 'Amina Image';
        img.style.maxWidth = '100%';
        item.appendChild(img);
    } else {
        item.textContent = msg;
    }
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

