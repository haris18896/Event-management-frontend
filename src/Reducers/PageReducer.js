export const pageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE_ID':
      return { ...state, pageId: action.payload }
    case 'PAGE_SECTIONS':
      return { ...state, pageSections: action.payload }

    default:
      return state
  }
}
