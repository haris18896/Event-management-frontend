import axios from 'axios'
import { MAIN_SERVICE_URL } from '../constants'
export const handleFetchSponsors = () => async (dispatch) => {
  try {
    const endPoint = `${MAIN_SERVICE_URL}/event/sponsor/listSponsors`
    let response = await axios.get(endPoint, {
      headers: {
        Authorization:
          'JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRiYjE0ZTVmNzdiMmE4YTY5ZDFmNyIsIm5hbWUiOiJNaWNoZWwgQnJ1bGwiLCJlbWFpbCI6ImluZm9AdHJpY2h0ZXIubmwiLCJyb2xlIjoic3ByYWRtaW4iLCJpYXQiOjE2MzU5NTczNjIsImV4cCI6MTYzNzI1MzM2MiwiYXVkIjoid3d3LnRyaWNodGVydGplLm5sIiwiaXNzIjoiTWFnaXNjaCBNYWFzdHJpY2h0Iiwic3ViIjoiNjE1ZGJiMTRlNWY3N2IyYThhNjlkMWY3In0.UgoTnBgu8HRJQsvagrybx92tn9Y3ErsuaUSKzJg_89fLZSFcN1fSabVaYKFfuLIB91M8SJtAhRJ1H2RRTFtqDg',
      },
    })

    if (response?.data) {
      dispatch({ type: 'LIST_SPONSORS', payload: response.data })
      console.log(response.data)
    }
  } catch (err) {
    if (err.response?.data) {
      console.log(err.response.data)
    }
  }
}
export const handleFetchTotalSponsors = (count) => async (dispatch) => {
  try {
    const endPoint = `${MAIN_SERVICE_URL}/event/sponsor/listSponsors?limit=${count}`
    let response = await axios.get(endPoint, {
      headers: {
        Authorization:
          'JWT eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNWRiYjE0ZTVmNzdiMmE4YTY5ZDFmNyIsIm5hbWUiOiJNaWNoZWwgQnJ1bGwiLCJlbWFpbCI6ImluZm9AdHJpY2h0ZXIubmwiLCJyb2xlIjoic3ByYWRtaW4iLCJpYXQiOjE2MzU5NTczNjIsImV4cCI6MTYzNzI1MzM2MiwiYXVkIjoid3d3LnRyaWNodGVydGplLm5sIiwiaXNzIjoiTWFnaXNjaCBNYWFzdHJpY2h0Iiwic3ViIjoiNjE1ZGJiMTRlNWY3N2IyYThhNjlkMWY3In0.UgoTnBgu8HRJQsvagrybx92tn9Y3ErsuaUSKzJg_89fLZSFcN1fSabVaYKFfuLIB91M8SJtAhRJ1H2RRTFtqDg',
      },
    })

    if (response?.data) {
      dispatch({ type: 'LIST_TOTAL_SPONSORS', payload: response.data.sponsors })
      console.log(response.data)
    }
  } catch (err) {
    if (err.response?.data) {
      console.log(err.response.data)
    }
  }
}
