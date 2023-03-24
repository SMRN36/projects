const form = document.querySelector('form');
const display = document.querySelector('#display');
const amountInput = document.querySelector('#amount');
const descInput = document.querySelector('#desc');
const categoryInput = document.querySelector('#category');
const BASE_URL = 'https://crudcrud.com/api/c6be502383474d4ba66bac8c7e58fb93/appointmentData';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = amountInput.value;
  const desc = descInput.value;
  const category = categoryInput.options[categoryInput.selectedIndex].value;

  const userData = { amount, desc, category };

  axios.post(BASE_URL, userData)
    .then(() => {
      displayData();
      clearInputs();
    })
    .catch((error) => {
      console.log(error);
    });
});

// function to display data from the server
function displayData() {
  axios.get(BASE_URL)
    .then((response) => {
      let data = '';
      response.data.forEach((user) => {
        data += `<div class="expense-row">
                    <p>Amount: ${user.amount}</p>
                    <p>Desc: ${user.desc}</p>
                    <p>Category: ${user.category}</p>
                    <button class="edit-btn" data-id="${user._id}">Edit Expense</button>
                    <button class="delete-btn" data-id="${user._id}">Delete Expense</button>
                </div>
                <hr>`;
      });

      
      display.innerHTML = data;
      addDeleteEventListeners();
      addEditEventListeners();
    })
    .catch((error) => {
      console.log(error);
    });
}

function addDeleteEventListeners() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      axios.delete(`${BASE_URL}/${id}`)
        .then(() => {
          displayData();
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}

function addEditEventListeners() {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      axios.get(`${BASE_URL}/${id}`)
        .then((response) => {
          const user = response.data;
          axios.delete(`${BASE_URL}/${id}`)
            .then(() => {
              amountInput.value = user.amount;
              descInput.value = user.desc;
              categoryInput.value = user.category;
              displayData();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}

function clearInputs() {
  amountInput.value = '';
  descInput.value = '';
  categoryInput.value = '';

  // Remove selected category from the screen
  display.removeChild(display.firstChild);
}

// Call displayData function on page load
displayData();
