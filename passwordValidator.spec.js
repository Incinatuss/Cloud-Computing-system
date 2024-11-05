const isValidPassword = require('./passwordValidator');

test('Le mdp est valide', () => {
    const valid = isValidPassword('12345678')
    expect(valid).toBe(true);
    const invalid = isValidPassword('1')
    expect(invalid).toBe(false);
})

test('Le mdp a au moins un chiffre', () => {
    expect(isValidPassword('4bonarara')).toBe(true);
    expect(isValidPassword('tomtometnana')).toBe(false);
})


test('Le mdp a au moins une lettre', () => {
    expect(isValidPassword('1234567x')).toBe(true);
    expect(isValidPassword('12345678')).toBe(false);
})