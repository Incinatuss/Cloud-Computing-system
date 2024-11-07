function retrieveBalance(accountID){
    console.log(`Retrieve Balance for ${accountID}`);
}

function debitAccount(accountID, amount){
    console.log(`${accountID} is debited of ${amount}`);
}


const bankDAO = {retrieveBalance, debitAccount};
module.exports = bankDAO;