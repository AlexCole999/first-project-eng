let defaultstate = {
  firebase: ""
}
const firebaseReducer = (state = defaultstate, action) => {
  switch (action.type) {
    case "ADD_FIREBASE_TO_REDUX":
      return {
        ...state,
        firebase: action.firebase
      }
    default: return state
  }
}
export default firebaseReducer;