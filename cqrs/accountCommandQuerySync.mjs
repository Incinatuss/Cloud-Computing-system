import { accountSummaryList } from "./queryDatabase.mjs";

export const accountCommandQuerySync = {
    mapping(account){
        const { creationDate, ...rest } = account;
        return rest;
    },
    insertAccount(account) {
        accountSummaryList.push(this.mapping(account));
      },
    updateAccount(account) {
        const index = accountSummaryList.findIndex((a) => a.id === account.id);
        if (index !== -1){
            accountSummaryList[index] = this.mapping(account);
        }
        console.log(accountSummaryList);
      },
};