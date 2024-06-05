const darkLightButton = document.querySelector('#darklight');
const bagrcls = document.querySelectorAll('.bagrcl');
let table1 = document.querySelector('#table1');

let body = document.querySelector('body');

// Retrieve the current color mode from session storage, or default to "light"
let currMode = sessionStorage.getItem('colorMode') || 'light';

function toggleBodyClassAndColors() {
  if (currMode === 'light') {
    currMode = 'dark';
    body.classList.add('dark');
    body.classList.remove('light');
    body.style.backgroundColor = '#000435';
    body.style.color = 'white';
    table1.style.color = 'white';
    bagrcls.forEach((el) => {
      el.style.backgroundColor = '#1c1c1c'; // New dark color for .bagrcl elements
      el.style.color = 'white';
    });
   
  } else {
    currMode = 'light';
    body.classList.add('light');
    body.classList.remove('dark');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    table1.style.color = 'black';
    bagrcls.forEach((el) => {
      el.style.backgroundColor = '#000435'; // Reset background color
      el.style.color = 'white'; // Reset text color
    });
  }

  // Store the current color mode in session storage
  sessionStorage.setItem('colorMode', currMode);
}

darkLightButton.addEventListener('click', toggleBodyClassAndColors);

// Set the initial color mode based on the value in session storage
if (currMode === 'dark') {
  body.classList.add('dark');
  body.style.backgroundColor = '#000435';
  body.style.color = 'white';
  table1.style.color = 'white';
  bagrcls.forEach((el) => {
    el.style.backgroundColor = '#1c1c1c'; // Apply new dark color initially
    el.style.color = 'white';
  })
  
} else {
  body.classList.add('light');
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  table1.style.color = 'black'; 
  bagrcls.forEach((el) => {
    el.style.backgroundColor = ''; // Reset background color initially
    el.style.color = ''; // Reset text color initially
  })
}