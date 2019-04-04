import stations from "./dummyData";

export default function stationReducer(state = stations, action) {
  switch (action.type) {
    case "GET_INFO":
      return state;
    default:
      return state;
  }
}
