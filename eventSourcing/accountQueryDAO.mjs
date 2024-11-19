import { accountCache } from "./cache.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountQueryDAO = {
    retrieveAccountList() {
        return accountSummaryList;
      },
    retrieveAccount(id) {
        return accountCache[id];
    },
};