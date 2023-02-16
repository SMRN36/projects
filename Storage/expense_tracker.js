const form = document.querySelector('form');
const display = document.querySelector('#display');
const amountInput = document.querySelector('#amount');
const descInput = document.querySelector('#desc');
const categoryInput = document.querySelector('#category');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = amountInput.value;
  const desc = descInput.value;
  const category = categoryInput.options[categoryInput.selectedIndex].value;


  const userData = { amount, desc, category, selectedCategory: categoryInput.options[categoryInput.selectedIndex].text, id: Date.now() };

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
      data += `<p>Amount: ${user.amount}</p>
               <p>Desc: ${user.desc}</p>
               <p>Category: ${user.selectedCategory}</p>
               <button class="edit-btn" data-id="${user.id}">Edit Expense</button>
               <button class="delete-btn" data-id="${user.id}">Delete Expense</button>
               <hr>`;
    });
    display.innerHTML = data;
    addDeleteEventListeners();
    addEditEventListeners();
  
    // Display selected category on the screen
    const selectedCategory = document.createElement('p');
    selectedCategory.innerText = `Selected Category: ${categoryInput.options[categoryInput.selectedIndex].text}`;
    display.prepend(selectedCategory);
  }
  
  

  function addDeleteEventListeners() {
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        const category = e.target.parentElement.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];
        const updatedData = storedData.filter((user) => user.id != id || user.category != category);
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
        const category = e.target.parentElement.querySelector('p:nth-of-type(3)').textContent.split(': ')[1];
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];
        const user = storedData.find((user) => user.id == id && user.category == category);
        const updatedData = storedData.filter((user) => user.id != id || user.category != category);
        localStorage.setItem('userData', JSON.stringify(updatedData));
        amountInput.value = user.amount;
        descInput.value = user.desc;
        categoryInput.value = user.category;
        displayData();
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
