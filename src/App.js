
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Adminpage from './Pages/Adminpage';
import ManagerPage from './Pages/ManagerPage';
import Employeepage from './Pages/EmployeePage';
import AddEmployee from './Pages/AddEmployee';
import Employeeform from './Layout/Employeeform';
import Managerform from './Layout/Managerform';
import Assignpage from './Pages/Assignpage';
import Applyleave from './Pages/Applyleave';
import Displayemployee from './Pages/Displayemployee';
import Employeehome from './Pages/Employeehome';
import Managerhome from './Pages/Managerhome';
import AssignedEmployee from './Pages/AssignedEmployee';
import Editpageemployee from './Pages/Editpageemployee';
import Assigntask from './Pages/Assigntask';
import Checktask from './Pages/Checktask';
import Updateprogress from './Pages/Updateprogress';
import Displayleave from './Pages/Displayleave';
import Checkleaveundermanager from './Pages/Checkleaveundermanager';
import Managerprofile from './Pages/Managerprofile';
import Editmanager from './Pages/Editmanager';
import Listallmanagers from './Pages/Listallmanagers';
import Taskprogresscheck from './Pages/Taskprogresscheck';
import Updataskform from './Pages/Updataskform';
import { isExpired } from 'react-jwt';

// import Ehome from './Pages/Ehome';

function App() {


  return (
    <div className="App">
      
      <Routes>
        <Route exact path="/" element={<Homepage></Homepage>} />
        <Route exact path="/Admin" element={<Adminpage></Adminpage>} />
        <Route exact path="/Manager" element={<ManagerPage></ManagerPage>} />
        <Route exact path="/Employee" element={<Employeepage></Employeepage>} />
        <Route exact path="/Addemployee" element={<AddEmployee></AddEmployee>} />
        <Route exact path="/managerform" element={<Managerform></Managerform>} />
        <Route exact path="/employeeform" element={<Employeeform></Employeeform>} />
        <Route exact path="/assignmanager" element={<Assignpage></Assignpage>} />
        <Route exact path="/displayemployee" element={<Displayemployee></Displayemployee>} />
        <Route exact path="/employeehome" element={<Employeehome></Employeehome>} />
        <Route exact path="/managerhome" element={<Managerhome></Managerhome>} />
        <Route exact path="/assignedEmployee" element={<AssignedEmployee></AssignedEmployee>} />
        <Route exact path="/edit/:emailId" element={<Editpageemployee></Editpageemployee>} />
        <Route exact path="/Applyleave" element={<Applyleave></Applyleave>} />
        <Route exact path="/checktask/:emailId" element={<Assigntask></Assigntask>} />
        <Route exact path="/employeetask" element={<Checktask></Checktask>} />
        <Route exact path="/updateprogress" element={<Updateprogress></Updateprogress>} />
        <Route exact path="/dispalyleave" element={<Displayleave></Displayleave>} />
        <Route exact path="/checkleaveundermng" element={<Checkleaveundermanager></Checkleaveundermanager>} />
        <Route exact path="/mngprofile" element={<Managerprofile></Managerprofile>} />
        <Route exact path="/edit1/:emailId" element={<Editmanager></Editmanager>} />
        <Route exact path="/getallmanagers" element={<Listallmanagers></Listallmanagers>} />
        <Route exact path="/getprogress/:emailId" element={<Taskprogresscheck></Taskprogresscheck>} />
        <Route exact path="/updatetask/:taskId" element={<Updataskform></Updataskform>} />
        {/* <Route exact path="/ehome" element={<Ehome></Ehome>} /> */}
      </Routes>  
    </div>
  );
}

export default App;
