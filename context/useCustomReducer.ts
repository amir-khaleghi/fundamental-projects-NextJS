import { useReducer } from 'react';
import reducer from '@/context/reducer';
import { birthdayBuddy } from '@/lib/data';

function useCustomReducer() {
  const [state, dispatch] = useReducer(reducer, { friends: birthdayBuddy });
  return { state, dispatch };
}
export default useCustomReducer;
