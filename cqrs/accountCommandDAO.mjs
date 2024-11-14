import { ACCOUNT_LIST } from "./database.mjs";

function convert(account){
  return JSON.parse(JSON.stringify(account));
}

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(convert(account));
      },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
        if (index !== -1){
            ACCOUNT_LIST[index] = convert(account);
        }
        console.log(ACCOUNT_LIST);
      },
    retrieveAccountById(id){
      return ACCOUNT_LIST.find((account) => account.id === id);
      },
};