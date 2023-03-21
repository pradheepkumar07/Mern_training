import './excer/exce2';
import AppDay4 from './excer/exce1';
import Excer2 from './excer/exce2';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<AppDay4 />} />
          <Route path="excer2" element={<Excer2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
