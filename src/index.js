import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-loading-skeleton/dist/skeleton.css'

// ** Main CSS **
import './styles/main.css'

// ** App Component **
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
