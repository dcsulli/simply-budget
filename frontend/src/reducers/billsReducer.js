export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_BILLS":
      return action.payload;
    default:
      return state;
  }
};
