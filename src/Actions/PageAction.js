export const changePage = pageId => async dispatch => {
  dispatch({
    type: 'CHANGE_PAGE_ID',
    payload: pageId,
  })
}
