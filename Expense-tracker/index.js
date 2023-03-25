const form = document.querySelector('form');
const display = document.querySelector('#display');
const amountInput = document.querySelector('#amount');
const descInput = document.querySelector('#desc');
const categoryInput = document.querySelector('#category');
const BASE_URL = 'https://crudcrud.com/api/4d5d94fed8e1498d985ec777f641fc08/appointmentData';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = amountInput.value;
  const desc = descInput.value;
  const category = categoryInput.options[categoryInput.selectedIndex].value;
  
  const userData = { amount, desc, category };
  
  try {
    await axios.post(BASE_URL, userData);
    displayData();
    clearInputs();
  }catch (error) {
    console.log(error);
  }
});
  
  // function to display data from the server
  async function displayData() {
    try {
      const response = await axios.get(BASE_URL);
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
  }catch (error) {
  console.log(error);
  }
}

function addDeleteEventListeners() {
  const deleteBtns = document.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      try {
        await axios.delete(`${BASE_URL}/${id}`);
        displayData();
      } catch (error) {
        console.log(error);
      }
    });
  });
}

function addEditEventListeners() {
  const editBtns = document.querySelectorAll('.edit-btn');
  editBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const id = e.target.getAttribute('data-id');
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        const user = response.data;
        await axios.delete(`${BASE_URL}/${id}`);
        amountInput.value = user.amount;
        descInput.value = user.desc;
        categoryInput.value = user.category;
        displayData();
      } catch (error) {
      console.log(error);
      }
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
