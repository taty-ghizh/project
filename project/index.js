function submitData(form) {
    console.log('form', form.username.value);
    console.log('form', form);
    const user = {
        username: form.username.value,
        password: form.username.value
    };
    localStorage.setItem('user', JSON.stringify(user));

    return false;
}