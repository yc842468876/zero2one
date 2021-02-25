import { getDataList } from '../../services/products';

export const dataListLoaded = (payload) => async (dispatch) => {
  const res = await getDataList();
  dispatch({
    type: 'SET_DATA',
    payload: {
      data: res.list || [],
    },
  });
};
