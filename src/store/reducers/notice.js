const initState = { isAllRead: false, count: 8 };

const notice = (state = initState, action) => {
  switch (action.type) {
    case 'READ_ALL':
      return { ...state, isAllRead: true };
    case 'SET_COUNT':
      const { count } = action.payload;
      return { ...state, count: count };
    default:
      return state;
  }
};

export default notice;
