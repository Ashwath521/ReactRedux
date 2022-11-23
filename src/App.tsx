import "./App.css";
import  CakeContainer  from "./component/CakeContainer";
import store from "./component/redux/cake/store"
import {Provider } from "react-redux"
import HookCakeContainer from './component/redux/HookCakeContainer'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>🚀😊Welcome to React redux Typescript😊🚀</h1>
      <HookCakeContainer />
      <CakeContainer />
    </div>
    </Provider>
  );
}

export default App;
