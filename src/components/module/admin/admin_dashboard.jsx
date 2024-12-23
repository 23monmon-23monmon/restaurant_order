import { useState } from "react";
import { Tabs } from "antd";
import CategorySetup from "./category_setup";
import MenuSetUp from "./menu_setup";
import { InfoCircleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const AdminDashboard = () => {

    const role = sessionStorage.getItem('role');

    return(
        <div>
            {
                role === 'admin' ? 
                
                <div className="pt-2 px-5 flex justify-center top-[20%] " 
                style={{
                    backgroundImage: "url('/cheese.png')",
                    
                    height: '100vh', // Adjust height
                    width: '', // Adjust width
                    
                  }}
                  >

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Category" key="1">
                        <CategorySetup />
                    </TabPane>
                    <TabPane tab="Menu" key="2">
                        <MenuSetUp />
                    </TabPane>
                </Tabs>

            </div>
            
            : 
            <div className="absolute top-[40%] left-[40%] text-[30px]  "> <InfoCircleOutlined /> Unauthorized Role</div>
            }
         </div>
        
    )
}

export default AdminDashboard;