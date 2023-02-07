
const form = document.querySelector('form');
const display = document.querySelector('#display');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;

  const userData = { name, email, phone, id: Date.now() };
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
             <button class="delete-btn" data-id="${user.id}">Delete</button>
             <hr>`;
  });
  display.innerHTML = data;
  addDeleteEventListeners();
}

function addDeleteEventListeners() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];
      const updatedData = storedData.filter((user) => user.id != id);
      localStorage.setItem('userData', JSON.stringify(updatedData));
      displayData();
    });
  });
}

// Call displayData function on page load
displayData();
