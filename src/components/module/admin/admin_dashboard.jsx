import { useState } from "react";
import { Tabs } from "antd";
import CategorySetup from "./category_setup";
import MenuSetUp from "./menu_setup";

const { TabPane } = Tabs;

const AdminDashboard = () => {

    return(
        <div className="pt-2 px-5 flex justify-center top-[20%] " 
        style={{
            backgroundImage: "url('/cheese.png')",
            
            height: '100vh', // Adjust height
            width: '', // Adjust width
            
          }}
          >
            <div className="">

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Category" key="1">
                        <CategorySetup />
                    </TabPane>
                    <TabPane tab="Menu" key="2">
                        <MenuSetUp />
                    </TabPane>
                </Tabs>

            </div>
            
        </div>
    )
}

export default AdminDashboard;