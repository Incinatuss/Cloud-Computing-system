function passwordValidator(password) {
    const estDeLongueurMin = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasUnelettre = /[a-zA-Z]/.test(password);
    return estDeLongueurMin && hasNumber && hasUnelettre;
}

module.exports = passwordValidator;