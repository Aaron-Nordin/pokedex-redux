//Initial state
const initialState = {
  user: "",
  something: [],
  thingy: {}
};

//Action Constants
const SET_USERNAME = "SET_USERNAME";

//Action Builder : Action: {type: , payload:, }
export function setUsername(username) {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
      case SET_USERNAME:
          return {...state, user: action.payload}
    default:
      return state;
  }
}
