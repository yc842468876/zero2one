export const asyncReadAll = (payload) => async (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: 'READ_ALL',
    });
  }, 1000);
};
