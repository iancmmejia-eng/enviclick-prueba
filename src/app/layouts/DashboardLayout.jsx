import react from "react";
import { UsersPage } from "../../features/users/pages/UsersPage";
import { NavBar } from "../../features/shared/components/Navbar";
import { Outlet } from "react-router";

function Dashboard() {
    return(
        <>  
            <NavBar />
            <main className="content">
                <Outlet />
            </main>
        </>
    )
}

export { Dashboard };