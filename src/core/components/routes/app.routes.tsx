import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../../../features/home/pages/home.page';
import { DetailsPage } from '../../../features/main/pages/details.page/details.page';
import { FavoritePage } from '../../../features/main/pages/favorite.page/favorite.page';
import { MainPage } from '../../../features/main/pages/main.page/main.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path={''} element={<HomePage></HomePage>}></Route>
            <Route path={'robots'} element={<MainPage></MainPage>}></Route>
            <Route
                path={'favorites'}
                element={<FavoritePage></FavoritePage>}
            ></Route>
            <Route
                path="/details/:robotId"
                element={<DetailsPage></DetailsPage>}
            />

            <Route
                path={'*'}
                element={<Navigate to="" replace></Navigate>}
            ></Route>
        </Routes>
    );
}
