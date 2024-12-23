import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../components/home_dashboard.jsx/homepage";
import MainMenu from "../../components/module/main_menu";
import MenuList from "../../components/module/menu_list";
import OptSend from "../../components/module/opt_send";
import AdminDashboard from "../../components/module/admin/admin_dashboard";
import Login from "../../components/module/admin/login";
import CommonLayout from "../../components/layout/common_layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
        {
            index: true,
            element: <MainMenu />,
        },
        {
            path: "opt_send",
            element: <OptSend />,
        },
        {
            path: 'admin_dashboard',
            element: <AdminDashboard />
        },
        {
            path: 'login',
            element: <Login />
        }
    ]
    }
    
])