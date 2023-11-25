import { ADD_NEW_FRIEND, CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { birthdayBuddy } from '@/lib/data';

const reducer = (state, action) => {
  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case REMOVE_ITEM:
      console.log('FROM REMOVE ITEM here');
      const newFriends = state.friends.filter(
        (friend) => friend.id !== action.payload.id
      );
      return { friends: newFriends };
    case CLEAR_LIST:
      console.log('why run this?');
      return { ...state, friends: [] };
    case RESET_LIST:
      console.log('FROM RESETLIST here');

      return { ...state, friends: birthdayBuddy };
    case ADD_NEW_FRIEND:
      console.log('FROM ADD_NEW_FRIEND ');
      return { ...state, friends: [...state.friends, action.payload] };
      console.log(state);
    default:
      return state;
  }

  // if (action.type === CLEAR_LIST) {
  //   // throw new Error(`No matching ${action.type} - action type`);
  //   console.log('why run this?');

  //   return { ...state, friends: [] };
  // }
  // if (action.type === RESET_LIST) {
  // }
  // if (action.type === REMOVE_ITEM) {
  // }
};
export default reducer;
