import {eventList} from "./eventStore.mjs";

export const accountCommandDAO = {
  retrieveAccountById(id){
    const event = eventList.find((event) => event.accountId === id && event.name === 'accountAdded');
    const account = event.payload;
    const filteredEvents = eventList.filter(event => event.accountId === id && event.name === 'accountUpdated');
    filteredEvents.forEach(updateEvent => {
      const { previous, new: newState } = updateEvent.payload;
      for (const key in newState) {
        if (newState[key] !== previous[key]) {
            account[key] = newState[key];
        }
      }
    });
    return account;
  },
};