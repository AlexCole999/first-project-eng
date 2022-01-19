let defaultstate = { head: {}, def: [] }
const getWordsFromTranslatorAPI = (state = defaultstate, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, data: action.data }
    default: return state
  }
}
export default getWordsFromTranslatorAPI;