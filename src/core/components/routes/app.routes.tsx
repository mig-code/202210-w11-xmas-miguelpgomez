import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../../features/home/pages/home.page';
import { MainPage } from '../../../features/main/pages/main.page';



export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<HomePage></HomePage>}></Route>
            <Route path={'robots'} element={<MainPage></MainPage>}></Route>

            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
