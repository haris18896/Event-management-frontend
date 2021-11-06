export const languageReducer = (
  state = {
    language: 'nl',
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return { ...state, language: action.payload }

    default:
      return state
  }
}
