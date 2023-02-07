const form = document.querySelector('form');
const display = document.querySelector('#display');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;

  const userData = { name, email, phone, id: Date.now() };
  let storedData = JSON.parse(localStorage.getItem('userData')) || [];
  storedData.push(userData);
  localStorage.setItem('userData', JSON.stringify(storedData));

  displayData();
  clearInputs();
});

// function to display data in local storage
function displayData() {
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];
  let data = '';
  storedData.forEach((user) => {
    data += `<p>Name: ${user.name}</p>
             <p>Email: ${user.email}</p>
             <p>Phone: ${user.phone}</p>
             <button class="edit-btn" data-id="${user.id}">Edit</button>
             <button class="delete-btn" data-id="${user.id}">Delete</button>
             <hr>`;
  });
  display.innerHTML = data;
  addDeleteEventListeners();
  addEditEventListeners();
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

function addEditEventListeners() {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];
      const user = storedData.find((user) => user.id == id);
      const updatedData = storedData.filter((user) => user.id != id);
      localStorage.setItem('userData', JSON.stringify(updatedData));
      nameInput.value = user.name;
      emailInput.value = user.email;
      phoneInput.value = user.phone;
      displayData();
    });
  });
}

function clearInputs() {
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
}

// Call displayData function on page load
displayData();
