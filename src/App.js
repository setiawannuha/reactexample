import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
