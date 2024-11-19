import { accountQuery } from "./accountQuery.mjs";
import { accountCommand } from "./accountCommand.mjs";
import { eventList } from "./eventStore.mjs";

accountCommand.addAccount({lastName: "Toto", firstName: "Lolo"});
console.log(eventList);
console.log(eventList[0].accountId);
accountCommand.saveAccount({id: eventList[0].accountId,lastName: "Gros", firstName: "Titi"});
accountCommand.saveAccount({id: eventList[0].accountId,lastName: "Gras", firstName: "Tata"});
console.log(accountQuery.getAccountList());
console.log(accountQuery.getAccount(eventList[0].accountId));
console.log(eventList);