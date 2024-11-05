function passwordValidator(password) {
    const estDeLongueurMin = password.length >= 8;
    const hasNumber = /\d/.test(password);
    return estDeLongueurMin && hasNumber;
}

module.exports = passwordValidator;