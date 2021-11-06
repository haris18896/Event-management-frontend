export const changeLanguage = language => async dispatch => {
  dispatch({
    type: 'CHANGE_LANGUAGE',
    payload: language,
  })
}
