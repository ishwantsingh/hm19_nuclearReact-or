export default const getInfo = (init, end) => {
  return {
    type: "GET_INFO",
    payload: {
      init,
      end
    }
  };
};
