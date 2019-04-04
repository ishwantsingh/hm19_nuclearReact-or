import stations from "./dummyData";

const initialState = {
  stations: stations,
  start: "",
  end: ""
};

export default function stationReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_INFO":
      console.log(action.payload);
      return { ...state, start: action.payload.start, end: action.payload.end };
    default:
      return state;
  }
}
