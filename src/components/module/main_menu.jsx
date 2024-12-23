import { useState,useEffect } from "react";
import MenuList from "./menu_list";

const MainMenu = () => {

    return(
        <div>
           
            <div className="flex justify-center pt-2" style={{fontSize : '20px', fontWeight : 'bold'}}>
               Welcome to Cheese O'Tea.
            </div>
            <div className="pt-1">
                <img src="/cheese.png" alt="Example" width="100%" />
            </div>
            <div className="pt-3">
                <MenuList />
            </div>
        </div>
    )
}

export default MainMenu;