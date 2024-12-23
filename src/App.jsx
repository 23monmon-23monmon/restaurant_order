import { useState } from 'react'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './lib/router_component/router';
function App() {
  // const navigate = useNavigate();
  return(
    <>
        <RouterProvider router={router} />;
    </>
  ) 
}

export default App
