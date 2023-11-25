import { ADD_NEW_FRIEND, CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { birthdayBuddy } from '@/lib/data';

const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      const newFriends = state.friends.filter(
        (friend) => friend.id !== action.payload.id
      );
      return { friends: newFriends };
    case CLEAR_LIST:
      return { ...state, friends: [] };
    case RESET_LIST:
      return { ...state, friends: birthdayBuddy };
    case ADD_NEW_FRIEND:
      return { ...state, friends: [...state.friends, action.payload] };
    default:
      return state;
  }
};
export default reducer;
