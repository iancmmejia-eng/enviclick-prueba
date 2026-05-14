
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { NavBar } from '../../features/shared/components/Navbar';
import { Routers } from '../router/AppRouter';
import { Dashboard } from './DashboardLayout';
import { LoginPage } from '../../features/auth/pages/LoginPage';
import { UsersPage } from '../../features/users/pages/UsersPage';
import { UserDetailPage } from '../../features/users/pages/UserDetailPage';


function App() {
    const isAuthenticated = true
    
  return (
    <>
    <Routes>
      <Route
        path='/'
        element={<LoginPage />}
      />

      {
        isAuthenticated && (
          <Route 
            path="/home"
            element={<Dashboard />}
          >
          <Route
            index
            element={<UsersPage />}
          />

              <Route
                path="users/:id"
                element={<UserDetailPage />}
              />
          </Route>
        )
      }
      <Route
          path="*"
          element={<Navigate to="/" />}
        />
    </Routes>



      {/* <NavBar></NavBar>
      <Routers /> */}
    </>
  );
}


export default App;