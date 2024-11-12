import { ACCOUNT_LIST } from "./database.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(({ creationDate, ...rest }) => rest);
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex((a) => a.id === account.id);
    if (index !== -1){
        ACCOUNT_LIST[index] = account;
    }
    console.log(ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const copyAccount = ACCOUNT_LIST.find((account) => account.id === id);
    return {
        id: copyAccount.id,
        name: copyAccount.lastName + " " + copyAccount.firstName,
        creationDate: copyAccount.creationDate,
    };
  },
};
