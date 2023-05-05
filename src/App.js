import { Header,Footer } from './components';
import './App.css';
import {AllRoutes} from "./routes/AllRoutes"


function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllRoutes/>
      <Footer></Footer>

    </div>
  );
}

export default App;
