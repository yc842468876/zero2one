import { getDataList } from '../../services/products';

export const dataListLoaded = (payload) => async (dispatch, getState) => {
  const res = await getDataList();
  dispatch({
    type: 'SET_DATA',
    payload: {
      data: res,
    },
  });
};
