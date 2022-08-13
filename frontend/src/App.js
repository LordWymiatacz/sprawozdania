import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Tasks from "./Tasks";
import Task from "./Task";
import Header from "./Header";
import Home from "./Home";



function App() {


  return (
    <BrowserRouter>
    <Header/>
      
      <div className='app'>

      
      
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks/:id" element={<Task/>} />
      </Routes>
      
      </div>
  </BrowserRouter>
  )
}

export default App;
