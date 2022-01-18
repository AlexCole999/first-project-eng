let defaultstateone = { data: [] }
const getWordsFromFirebaseReducer = (state = defaultstateone, action) => {
  switch (action.type) {
    case "ADD_DATA_FROM_FIREBASE":
      return { ...state, data: action.data }
    default: return state
  }
}
export default getWordsFromFirebaseReducer;
