const validateForm = (data) => {
    const errors = [];
    const { name, email, password, age } = data;
    if (name.length === 0) {
        errors.push(`The name should not be empty`);
    }
    if (!email.includes('@')) {
        errors.push(`Email must contain @ in it.`);
    }
    if (password.length < 8) {
        errors.push(`Password should be longer than 8 characters.`);
    }
    if (age !== undefined && (age <= 0 || age > 150)) {
        errors.push(`age is not valid!`);
    }
    console.log(errors);
    return errors;
};
const newPerson10 = {
    name: '',
    email: 'bo@gmail.com',
    password: 'asjs',
    age: 10
};
const errors = validateForm(newPerson10);
if (errors.length > 0) {
    errors.forEach(error => console.log(error));
}
