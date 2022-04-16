
import Router from "./Router";
import Header from './Commons/Header';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
  );
}

export default App;
