let defaultstateone = { data: [] }
const getWordsFromFirebaseReducer = (state = defaultstateone, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, data: action.data }
    default: return state
  }
}
export default getWordsFromFirebaseReducer;
