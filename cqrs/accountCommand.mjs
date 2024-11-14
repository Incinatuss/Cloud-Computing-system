import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountCommandQuerySync } from "./accountCommandQuerySync.mjs";
import { accountCommandCache } from "./accountCommandCache.mjs";
import {Account} from "./account.mjs";

export const accountCommand = {
    addAccount({lastName, firstName}) {
        const account = new Account({lastName, firstName});
        accountCommandDAO.insertAccount(account);
        accountCommandQuerySync.insertAccount(account);
        accountCommandCache.insertAccount(account);
    },
    saveAccount({id, lastName, firstName}) {
        const account = new Account({id: id, lastName: lastName, firstName: firstName});
        accountCommandDAO.updateAccount(account);
        accountCommandQuerySync.updateAccount(account);
        accountCommandCache.updateAccount(account);
    },
};