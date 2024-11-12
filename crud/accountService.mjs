import { accountDAO } from "./accountDAO.mjs";
import {Account} from "./account.mjs";

export const accountService = {
    addAccount(lastName, firstName) {
        const account = new Account(null, lastName, firstName);
        accountDAO.insertAccount(account);
    },
    getAccountList() {
        return accountDAO.retrieveAccountList();
    },
    saveAccount(id, lastName, firstName) {
        const account = new Account(id, lastName, firstName);
        accountDAO.updateAccount(account);
    },
    getAccount(id) {
        return accountDAO.retrieveAccount(id);
    },
  };
