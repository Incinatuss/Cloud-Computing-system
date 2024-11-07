const bankDAO = require("./bankDAO.js");
const bank = require("./bankTransfert.js");

function getBalance(accountID){
    return bankDAO.retrieveBalance(accountID);
}

async function transferMoney(accountID, amount) {
    bank.transfer(accountID, amount)
    .then(() => {
        bankDAO.debitAccount(accountID, amount);
        console.log(`Transferrring ${amount} to account ${accountID}`)
    })
    .catch((error) => {
        console.log(error);
    });
    
}
const bank = {getBalance, transferMoney};
module.exports = bank;