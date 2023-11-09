import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./views/Dashboard";
import Supervisor from "./views/Supervisor";
import AddSupervisor from './views/AddSupervisor'

export default function Mapping() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/supervisor" element={<Supervisor />} />
         <Route path="/addSupervisor" element={<AddSupervisor />} />

         

         
       </Routes>
     </BrowserRouter>
   );
 }
 
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Mapping />);
 
 