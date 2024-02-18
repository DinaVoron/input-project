function handleName (event) {
  if (event.target.value === '') {
    event.target.classList.add('form__input_red')
  } else {
    event.target.classList.remove('form__input_red')
  }
}

function handlePhone (event) {
  const phoneNumberRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
  if (event.target.value === '' || !phoneNumberRegex.test(event.target.value)) {
    event.target.classList.add('form__input_red')
  } else {
    event.target.classList.remove('form__input_red')
  }
}

function handleEmail (event) {
  const emailRegex = /^\w+@\w+.\w+$/
  if (!emailRegex.test(event.target.value)) {
    event.target.classList.add('form__input_red')
  } else {
    event.target.classList.remove('form__input_red')
  }
}
