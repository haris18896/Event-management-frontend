import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { contactFormReducer } from './Reducers/ContactReduce'
import { languageReducer } from './Reducers/LanguageReducer'
import { pageReducer } from './Reducers/PageReducer'
import { sponsorReducer } from './Reducers/SponsorReducer'

const reducer = combineReducers({
  // reducers
  contactForm: contactFormReducer,
  language: languageReducer,
  page: pageReducer,
  sponsor: sponsorReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
