import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importaciones de las páginas
import Home from "../pages/Home";
import HomeLayout from "../components/Layouts/HomeLayout";
import Gastos from "../pages/Gastos";
import Ahorro from "../pages/Ahorro";
import Prestamos from "../pages/Prestamos";
import Ajustes from "../pages/Ajustes";

export default function AppRouters(){
    return (
        <BrowserRouter>
            <Routes>

                /* EJEMPLO DE SUBRUTA */
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/gastos" element={<Gastos />} />
                    <Route path="/ahorro" element={<Ahorro />} />
                    <Route path="/prestamos" element={<Prestamos />} />
                    <Route path="/ajustes" element={<Ajustes />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}