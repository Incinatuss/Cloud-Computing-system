const bankDAO = require("./bankDAO.js");

function getBalance(accountID){
    return bankDAO.retrieveBalance(accountID);
}
const bank = {getBalance};
module.exports = bank;