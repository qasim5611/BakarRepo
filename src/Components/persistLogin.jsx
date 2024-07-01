import { Navigate, Outlet } from 'react-router-dom';
export default function PersistLogin() {
    let storedData = JSON.parse(localStorage.getItem('persistMe'));

    return <>{!storedData?.user?.token ? <Navigate to="/login" /> : <Outlet />}</>;
}
