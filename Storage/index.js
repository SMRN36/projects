function storeFormData() {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var confirmPassword = document.querySelector("#confirm-password").value;
    
    var formData = {
      name: name,
      email: email,
      password: password
    };
    
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Form data has been stored in local storage.");
    console.log(localStorage);
    let deserialized = JSON.parse(localStorage.getItem('formData'));
    console.log(deserialized);
  }
  

  