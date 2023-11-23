document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
  
    // Function to print input as notification
    function printNotification(input) {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = input.value;
  
      // Display notification as a tab on the screen
      document.body.appendChild(notification);
  
      // Remove notification after 3 seconds
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 3000);
    }
  
    // Click event listener for submit button
    submitButton.addEventListener('click', function () {
      // Play sound on submit
      playSubmitSound();
  
      // Print each input as a notification
      Array.from(contactForm.elements).forEach(input => {
        if (input.type !== 'button') {
          printNotification(input);
        }
      });
    });
  
    // Function to play sound on submit
    function playSubmitSound() {
      const audio = new Audio('audio/sound.m4a'); // Replace with the path to your sound file
      audio.play();
    }
  });
  