const bankDAO = require("./bankDAO.js");
const bank = require("./bank.js");

test("Should return balance", () => {
    const AccountID = 123;
    const expectedBalance = 100;
    const spy = jest.spyOn(bankDAO, "retrieveBalance");
    spy.mockReturnValue(expectedBalance);
    bank.getBalance(AccountID);
    expect(spy).toHaveBeenCalledWith(AccountID);
    expect(balance).toBe(expectedBalance); 
});