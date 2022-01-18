let defaultstatetwo = { some2: 2 }
const getWordsFromTranslatorAPI = (state = defaultstatetwo, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    default: return state
  }
}
export default getWordsFromTranslatorAPI;