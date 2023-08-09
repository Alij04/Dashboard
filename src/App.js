import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
