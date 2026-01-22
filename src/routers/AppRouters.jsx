import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importaciones de las páginas
import Home from "../pages/Home";
import HomeLayout from "../components/Layouts/HomeLayout";

export default function AppRouters(){
    return (
        <BrowserRouter>
            <Routes>

                /* EJEMPLO DE SUBRUTA */
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}