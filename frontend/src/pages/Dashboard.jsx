import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';




function Dashboard() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="https://celadonbooks.com/wp-content/uploads/2018/11/love-librarians.jpg">

        <Outlet />

      </div>

    </div>

  );

}



export default Dashboard;