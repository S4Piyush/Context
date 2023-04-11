
import { createContext, useReducer } from 'react';
import './App.css';
import AboutUs from './Page/AboutUs';
import Home from './Page/Home';
import Reducer from './Page/Reducer';

const Instate = {
  micro: [],
  art: "",

}

export const context = createContext({
  Instate, dispatch: () => { }
})


function App() {

  const [data, dispatch] = useReducer(Reducer, Instate)

  return (
    <div className="App">
      <context.Provider value={{ data, dispatch }}>
        <AboutUs />
        <Home />
      </context.Provider>
    </div>
  );
}

export default App;
