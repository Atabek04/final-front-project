const form = document.querySelector('#contact-form');
const status = document.querySelector('.status');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData)
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Thanks for your message! We will get back to you soon.';
        form.reset();
      } else {
        status.innerHTML = 'Oops! There was a problem submitting your message.';
      }
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your message.';
    });
});


const form = document.querySelector('#contact-form');
const status = document.querySelector('.status');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

// Add focus event listeners to the form inputs
nameInput.addEventListener('focus', () => {
  nameInput.classList.add('active');
});

emailInput.addEventListener('focus', () => {
  emailInput.classList.add('active');
});

subjectInput.addEventListener('focus', () => {
  subjectInput.classList.add('active');
});

messageInput.addEventListener('focus', () => {
  messageInput.classList.add('active');
});

// Add blur event listeners to the form inputs
nameInput.addEventListener('blur', () => {
  if (nameInput.value === '') {
    nameInput.classList.remove('active');
  }
});

emailInput.addEventListener('blur', () => {
  if (emailInput.value === '') {
    emailInput.classList.remove('active');
  }
});

subjectInput.addEventListener('blur', () => {
  if (subjectInput.value === '') {
    subjectInput.classList.remove('active');
  }
});

messageInput.addEventListener('blur', () => {
  if (messageInput.value === '') {
    messageInput.classList.remove('active');
  }
});

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(formData)
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = 'Thanks for your message! We will get back to you soon.';
        form.reset();
      } else {
        status.innerHTML = 'Oops! There was a problem submitting your message.';
      }
    })
    .catch((error) => {
      status.innerHTML = 'Oops! There was a problem submitting your message.';
    });
});