const isValidPassword = require('./passwordValidator');

test('Le mdp est valide', () => {
    expect(isValidPassword('12345678')).toBe(true);
    expect(isValidPassword('1')).toBe(false);
})

test('Le mdp a au moins un chiffre', () => {
    expect(isValidPassword('Leboncou1')).toBe(true);
    expect(isValidPassword('LaBruteEtLeTruand')).toBe(false);
})


test('Le mdp a au moins une lettre', () => {
    expect(isValidPassword('1234567h')).toBe(true);
    expect(isValidPassword('12345678')).toBe(false);
})