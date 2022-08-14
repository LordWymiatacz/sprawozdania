import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About'
import Tasks from "./Tasks";
import Task from "./Task";
import Header from "./Header";
import Home from "./Home";
import CheckUser from "./User/CheckUser";


function App() {


  return (
    <BrowserRouter>
    <Header/>
      
      <div className='app'>

      
      
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/users" element={<CheckUser/> } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/tasks/:id" element={<Task/>} />
      </Routes>
      
      </div>
  </BrowserRouter>
  )
}

export default App;
