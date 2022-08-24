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
import AddGroups from "./mde/AddGroups";
import Groups from "./groups/Groups";
import Group from "./groups/Group";
import useToken from './auth/useToken';
import Login from './auth/Login';
function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return (
      <BrowserRouter>
    <Header logged={false}/>
      
      <div className='app'>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/d" element={<Dashboard logged={false}/>} /> */}
          <Route path='/login' element={<Login setToken={setToken} />}/>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/groups" element={<Groups/>} />

          <Route path="/:id" element={<Group logged={false}/>} />
          <Route path="/:id/:id" element={<Task logged={false}/>} />
          
        </Routes>
        </div>
      </BrowserRouter>
    



    )
  }
  return (
    <BrowserRouter>
    <Header logged={true}/>
      
      <div className='app'>

      
      
      <Routes>
        {/* <Route path="/users" element={<CheckUser />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />

        <Route path="addTasks" element={<AddTasks/>}/>
        <Route path="/addGroups" element={<AddGroups/>}/>

        <Route path="/tasks" element={<Tasks />} />
        <Route path="/groups" element={<Groups/>} />

        <Route path="/:id" element={<Group logged={true}/>} />
        <Route path="/:id/:id" element={<Task logged={true}/>} />
      </Routes>
      
      </div>
  </BrowserRouter>
  )
}

export default App;
