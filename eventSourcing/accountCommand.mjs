import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountCommandQuerySync } from "./accountCommandQuerySync.mjs";
import { accountCommandCache } from "./accountCommandCache.mjs";
import {Event} from "./event.mjs";
import {Account} from "./account.mjs";
import {eventStore} from "./eventStore.mjs";


export const accountCommand = {
    addAccount({lastName, firstName}) {
        const account = new Account({lastName, firstName});
        eventStore.addEvent(new Event({name: 'accountAdded', accountId: account.id, payload: account}));
        accountCommandQuerySync.insertAccount(account);
        accountCommandCache.insertAccount(account);
    },
    saveAccount({id, lastName, firstName}) {
        const account = accountCommandDAO.retrieveAccountById(id);;
        const payload = {
            "previous" : {
                "lastName": account.lastName,
                "firstName" : account.firstName,
            },
            "new" : {
                "lastName" : lastName,
                "firstName" : firstName,
            }
        };
        account.lastName = lastName;
        account.firstName = firstName
        eventStore.addEvent(new Event({name: 'accountUpdated', accountId: account.id, payload: payload}));
        accountCommandQuerySync.updateAccount(account);
        accountCommandCache.updateAccount(account);
    },
};