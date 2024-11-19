import { accountCache } from "./cache.mjs";

export const accountCommandCache = {
    mapping(account){
        const {lastName, firstName, ...rest} = account;
        const name = lastName + " " + firstName;
        return {...rest, name};
    },
    insertAccount(account) {
        accountCache[account.id] = this.mapping(account);
      },
    updateAccount(account) {
        accountCache[account.id] = this.mapping(account);
        console.log(accountCache);
      },
};