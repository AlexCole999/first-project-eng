let defaultstatetwo = { head: {}, def: [] }
const getWordsFromTranslatorAPI = (state = defaultstatetwo, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    default: return state
  }
}
export default getWordsFromTranslatorAPI;