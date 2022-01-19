let defaultstate = {
  data: {
    words: "Загрузка...",
    translates: "Загрузка..."
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