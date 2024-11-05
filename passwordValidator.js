function passwordValidator(password) {
    const estDeLongueurMin = password.length >= 8;
    const aUnNumber = /\d/.test(password);
    const aUnelettre = /[a-zA-Z]/.test(password);
    return estDeLongueurMin && aUnNumber && aUnelettre;
}

module.exports = passwordValidator;