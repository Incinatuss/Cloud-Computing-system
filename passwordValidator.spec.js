const isValidPassword = require('./passwordValidatorV1');

test('Le mdp est valide', () => {
    expect(isValidPassword('12345678')).toBe(true);
    expect(isValidPassword('1')).toBe(false);
})