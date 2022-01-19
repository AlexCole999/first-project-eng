let defaultstate = {
  data: {
    words: 0,
    translates: 0
  }
}
const getUserStatistics = (state = defaultstate, action) => {
  switch (action.type) {
    case "ADD_STATISTICS_DATA":
      return {
        ...state,
        data: {
          words: action.words,
          translates: action.translates
        }
      }
    default: return state
  }
}
export default getUserStatistics;