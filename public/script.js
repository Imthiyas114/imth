const socket = io();

const input = document.getElementById('message-input');
const messages = document.getElementById('messages');
const cameraButton = document.getElementById('camera-button');

// Handle sending messages
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const message = input.value.trim();
        if (message) {
            appendMessage(message, 'sent'); // Sent message
            socket.emit('chat message', message);
            input.value = '';
        }
    }
});

// Handle receiving messages
socket.on('chat message', function (msg) {
    appendMessage(msg, 'received'); // Received message
});

// Handle camera button (placeholder for functionality)
cameraButton.addEventListener('click', () => {
    alert('Camera functionality not implemented yet.'); // Placeholder
});

// Function to append messages to the UI
function appendMessage(message, type) {
    const item = document.createElement('li');
    item.classList.add(type);

    if (message.includes('Amina')) {
        const images = ['Screenshot 2024-04-25 232941.png', 'Screenshot 2024-10-16 033829.png'];
        images.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Amina Image';
            img.style.maxWidth = '100%';
            item.appendChild(img);
        });
    } else {
        item.textContent = message;
    }

    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
}
