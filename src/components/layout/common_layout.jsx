import React from "react";
import { Outlet, Link,useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const CommonLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const backAction = () => {
        if(location.pathname !== '/'){
            navigate(-1);
        }
    }

    return(
        <>
            <div className="flex justify-between bg-[red] pt-3 pb-3 px-2">
                <div onClick={backAction}> <ArrowLeftOutlined style={{color : 'white', fontSize : '20px'}} /> </div>
                <div style={{color : 'white'}}> <Link to='/'>Menu</Link></div>
                <div style={{color : 'white'}} > <Link to='login'>Login</Link>  </div>
                    
            </div>
            <Outlet />
            </>
    )
}

export default CommonLayout;