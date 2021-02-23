const initState = { data: [] };

const productList = (state = initState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      const { data } = action.payload;
      return { ...state, data };
    default:
      return state;
  }
};

export default productList;
