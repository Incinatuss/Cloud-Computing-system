import { accountService } from "./accountService.mjs";
import { ACCOUNT_LIST } from "./database.mjs";

accountService.addAccount("Toto", "Lolo");
console.log(ACCOUNT_LIST);
accountService.saveAccount(ACCOUNT_LIST[0].id,"Gros", "Titi");
console.log(accountService.getAccountList());
console.log(accountService.getAccount(ACCOUNT_LIST[0].id));