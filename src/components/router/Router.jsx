import Register from '../user/Register'
import Login from '../user/Login'
import { createBrowserRouter } from 'react-router-dom'
import Creation from '../task/Creation'
import Gettask from '../task/Gettask'
import Updatetask from '../task/Updatetask'
import PrivateRoute from '../helper/PrivateRoute'
export let routes = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path:'/createtask',
    element:<PrivateRoute><Creation></Creation></PrivateRoute>
  },
  {
    path:'/gettask',
    element:<PrivateRoute><Gettask></Gettask></PrivateRoute>
  },
  {
    path:'/updatetask',
    element:<PrivateRoute><Updatetask></Updatetask></PrivateRoute>
  }
])
