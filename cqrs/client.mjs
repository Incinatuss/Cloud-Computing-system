import { accountQuery } from "./accountQuery.mjs";
import { accountCommand } from "./accountCommand.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

accountCommand.addAccount({lastName: "Toto", firstName: "Lolo"});
console.log(ACCOUNT_LIST);
accountCommand.saveAccount({id: ACCOUNT_LIST[0].id,lastName: "Gros", firstName: "Titi"});
console.log(accountQuery.getAccountList());
console.log(accountQuery.getAccount(ACCOUNT_LIST[0].id));