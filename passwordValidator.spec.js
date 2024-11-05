const isValidPassword = require('./passwordValidatorV1');

test('Le mdp est valide', () => {
    expect(isValidPassword('12345678')).toBe(true);
    expect(isValidPassword('1')).toBe(false);
})

test('Le mdp a au moins un chiffre', () => {
    expect(isValidPassword('Leboncou1')).toBe(true);
    expect(isValidPassword('LaBruteEtLeTruand')).toBe(false);
})