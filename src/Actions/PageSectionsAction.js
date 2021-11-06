import axios from 'axios'
import { MAIN_SERVICE_URL } from '../constants'
export const handleFetchPageSection = (pageId, language) => async dispatch => {
  try {
    const endPoint = `${MAIN_SERVICE_URL}/event/pageSection/listPageSections?pageId=${pageId}&language=${language}`

    console.log(endPoint)

    let response = await axios.get(endPoint)

    if (response?.data) {
      dispatch({ type: 'PAGE_SECTIONS', payload: response.data.pageSections })
      console.log(response.data)
    }
  } catch (err) {
    if (err.response?.data) {
      console.log(err.response.data)
    }
  }
}
