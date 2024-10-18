  const regform = document.querySelector("#regform");
  const password = document.querySelector('#password');
  const repeatPassword = document.querySelector('#repeat-password');

  regform.addEventListener('submit', e => {
    e.preventDefault()
  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const email = document.querySelector('#email');

  if(validateform(regform)) {
    return
  }

  const user = {
    firstName: firstName.value,
    middleName: middleName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    address: address.value
  }

    console.log(user)

  })

  const validateform = (form) => {
  const errors = [];
  for(let i = 0; i <regform.elements.length; i++) {
    const input = form[i]
    input.parentElement.classList.remove('error')
    if(input.required) continue;

    errors.push(validationSwitch(input));
  }

  if(errors.includes(false)) return false;

  return true;
}

const validationSwitch = (input) => {
  switch(input.type) {
    case 'text': return validateText(input)
    case 'email': return validateEmail(input)
    case 'password': return input.id === 'password' ? validatePassword(input) : samePassword(password, repeatPassword)
    case 'checkbox': return validateCheckbox(input)
    default: break;
  }
}


const setError = (input, message) => {
  const parent = input.parentElement;
  parent.classList.add('error')

  const errorElement = parent.querySelector('.invalid-input');
  errorElement.innerText = message
}


const validateText = (input) => {
  if(input.value.trim() === '') {
    setError(input, 'This field can\'t be empty')
    return false
  } 
  else if (input.value.trim().length < 2) {
    setError(input, 'this must be atleast 2 chars long')
    return false
  }

  return true
}

const validateEmail = (input) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if(input.value.trim().length <= 0) {
    setError(input, 'you need to enter an email address')
    return false
  }
  else if(emailRegex.test(input.value)) {
    setError(input, 'you need to enter a VALID email address')
    return false
  }

  return true
}


const validatePassword = (input) => {
  const passwordRegex = /^(?=.*\d).{5,}$/;

  if(input.value.trim() === '') {
    setError(input, 'Password can\'t be empty')
    return false
  }
  else if(passwordRegex.test(input.value)) {
    setError(input, 'The password must contain atleast 5 characters and ')
    return false  
  }
  return true
}
const samePassword = (password, repeatPassword) => {
  if(input.value.trim() === '') {
    setError(repeatPassword, 'Password can\'t be empty')
    return false
  }
  else if(password.value.trim() !== repeatPassword.value.trim()) {
    setError(repeatPassword, 'Passwords must match')
    return false
  }
  return true
}
const validateCheckbox = (input) => {
  if(!input.checked) {
    setError(input, 'You need to accept the terms to continue')
    return false
  }
  return true
}
