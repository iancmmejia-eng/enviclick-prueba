import react from "react";
import { Routes, Route} from 'react-router';
import { UsersPage } from "../../features/users/pages/UsersPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { Dashboard } from "../layouts/DashboardLayout";
import { UserDetailPage } from "../../features/users/pages/UserDetailPage";


function Routers() {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
        </Routes>
    );
}

export { Routers }