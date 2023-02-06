// JavaScript code for storing data in local storage
const form = document.querySelector('form');
const display = document.querySelector('#display');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  const userData = { name, email, phone };
  let storedData = JSON.parse(localStorage.getItem('userData')) || [];
  storedData.push(userData);
  localStorage.setItem('userData', JSON.stringify(storedData));

  displayData();
});

// function to display data in local storage
function displayData() {
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];
  let data = '';
  storedData.forEach((user) => {
    data += `<p>Name: ${user.name}</p>
             <p>Email: ${user.email}</p>
             <p>Phone: ${user.phone}</p>
             <hr>`;
  });
  display.innerHTML = data;
}

// Call displayData function on page load
displayData();
