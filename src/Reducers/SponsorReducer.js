export const sponsorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LIST_SPONSORS':
      return { ...state, totalSponsorsCount: action.payload.sponsorsCount }

    case 'LIST_TOTAL_SPONSORS':
      return { ...state, totalSponsors: action.payload }

    default:
      return state
  }
}
