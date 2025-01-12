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
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
