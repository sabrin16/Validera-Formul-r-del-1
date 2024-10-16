const regform = document.querySelector("#regform");

regform.addEventListener('submit', e => {
  e.preventDefault()

  for(let i = 0; i < regform.height; i++) {
    regForm[i].parentElement.classList.remove('error')
  }

  const firstName = document.querySelector('#firstName'); 
  const middleName = regform[1];
  const lastName = regform.lastName;
  const address = document.querySelector('#address')
  validateTextInput(firstName);
  validateTextInput(lastName);
  validateTextInput(middleName);
  validateTextInput(address);

  if(validateTextInput(firstName) == false){
    return
  }
  if(validateTextInput(middleName) == false){
    return
  }
  if(validateTextInput(lastName) == false){
    return
  }
  if(validateTextInput(address) == false){
    return
  }


  const user = {
    firstName: firstName.value,
    middleName: middleName.value,
    lastName: lastName.value,
    address: address.value
  }
  

  console.log(user)

})


const validateTextInput = (input) => {
  if(input.value === '') {

    const parent = input.parentElement;
    parent.classList.add('error')
    return false
  }

  return true
}