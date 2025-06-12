const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

const botReplies = [
  "Oh, you again?",
  "I'm ignoring that.",
  "Wow, fascinating... not.",
  "Do you expect a response to that?",
  "Maybe if you said something interesting.",
  "Sorry, I fell asleep halfway through your message.",
  "That's cute. Try harder.",
  "Your message has been eaten by the void.",
  "Wow, such words. Much meaning. Very message.",
  "LOL. No."
];

function sendMessage() {
  const text = userInput.value.trim();
  if (text === '') return;

  addMessage(text, 'user');
  userInput.value = '';

  setTimeout(() => {
    
    if (Math.random() > 0.5) {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      addMessage(reply, 'bot');
    }
    
  }, 1000);
}

function addMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
