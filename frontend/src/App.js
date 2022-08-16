import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './pages/About'
import Tasks from "./task/Tasks";
import Task from "./task/Task";
import Header from "./header/Header";
import Home from "./pages/Home";
import CheckUser from "./User/CheckUser";
import AddTasks from "./mde/AddTasks";


function App() {


  return (
    <BrowserRouter>
    <Header/>
      
      <div className='app'>

      
      
      <Routes>
        <Route path="/users" element={<CheckUser />} />
        <Route path="/addTasks" element={<AddTasks/>}/>
        <Route path="/" element={<Tasks />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/tasks/:id" element={<Task/>} />
      </Routes>
      
      </div>
  </BrowserRouter>
  )
}

export default App;
