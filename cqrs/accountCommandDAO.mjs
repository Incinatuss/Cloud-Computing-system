import { ACCOUNT_LIST } from "./database.mjs";

export const accountCommandDAO = {
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
      },
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
        if (index !== -1){
            ACCOUNT_LIST[index] = account;
        }
        console.log(ACCOUNT_LIST);
      },
    retrieveDateById(id){
      const copyAccount = ACCOUNT_LIST.find((account) => account.id === id);
      return copyAccount.creationDate;
      },
};