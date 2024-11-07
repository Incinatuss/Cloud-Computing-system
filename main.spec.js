const bankDAO = require("./bankDAO.js");
const bank = require("./bank.js");
const bankTransfer = require("./bankTransfer.js");

test("Should return balance", () => {
    const AccountID = 123;
    const expectedBalance = 100;
    const spy = jest.spyOn(bankDAO, "retrieveBalance");
    spy.mockReturnValue(expectedBalance);
    bank.getBalance(AccountID);
    expect(spy).toHaveBeenCalledWith(AccountID);
    expect(balance).toBe(expectedBalance); 
});


test("Transfer done", async() => {
    const AccountID = 123;
    const amount = 1000;
    const spy = jest.spyOn(bankTransfer, "transfer");
    await bank.transferMoney(AccountID, amount);
    expect(spy).toHaveBeenCalledWith(AccountID, amount)
    spy.mockRestore();
});

test("Account debited", async() => {
    const AccountID = 123;
    const amount = 1000;
    const spy = jest.spyOn(bankTransfer, "transfer");
    await bank.transferMoney(AccountID, amount);
    expect(jest.spyOn(bankDAO, "debitAccount")).toHaveBeenCalledWith(AccountID, amount)
    spy.mockRestore();
});

test("Transfer is executed", async() => {
    const AccountID = 123;
    const amount = 1000;
    jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);
    jest.spyOn(bankTransfer, "transfer").mockReturnValue(null);
    await bank.transferMoney(AccountID, amount);
    expect(bankDAO.debitAccount).toHaveBeenCalledWith(AccountID, amount)
    expect(bankTransfer.transfer).toHaveBeenCalledWith(AccountID, amount)
});

test("Transfer is not executed", async() => {
    const AccountID = 123;
    const amount = 1000;
    jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);
    jest.spyOn(bankTransfer, "transfer").mockReturnValue(new Error('Transfer Failed'));
    await bank.transferMoney(AccountID, amount);
    expect(bankDAO.debitAccount).not.toHaveBeenCalled()
});