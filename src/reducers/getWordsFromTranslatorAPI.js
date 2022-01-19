let defaultstate = { data: { def: [] } }
const getWordsFromTranslatorAPI = (state = defaultstate, action) => {
  switch (action.type) {
    case "ADD_DATA_FROM_TRANSLATORAPI":
      return { ...state, data: action.data }
    default: return state
  }
}
export default getWordsFromTranslatorAPI;