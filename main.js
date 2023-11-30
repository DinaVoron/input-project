function handleName(event) {
    if (event.target.value === '') {
        event.target.classList.add("form__input_red");
    } else {
        event.target.classList.remove("form__input_red");
    }
}

function handlePhone(event) {

    // Формат номера: +7 (423) 123-45-67
    const phoneNumberRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

    if (event.target.value === '' || !phoneNumberRegex.test(event.target.value)) {
        event.target.classList.add("form__input_red");
    } else {
        event.target.classList.remove("form__input_red");
    }
}

function handleEmail(event) {
    const phoneNumberRegex = /^w+\@w+.w+$/;
    if (!phoneNumberRegex.test(event.target.value) && event.target.value !== '') {
        event.target.classList.add("form__input_red");
    } else {
        event.target.classList.remove("form__input_red");
    }
}