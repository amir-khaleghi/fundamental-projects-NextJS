import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from '@/context/actions';

/* Handlers ___________________________________________ */ 7;

const useHandlers = ({ dispatch }) => {
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  return { removeItem, resetList, clearList };
};
export default useHandlers;
