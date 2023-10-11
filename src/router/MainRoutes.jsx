import { Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import { LoginForm } from "../components/LoginForm";
import { SignupForm } from "../components/SignupForm";
import { ProductList } from "../components/ProductList";








export const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/productos' element={<ProductList />} />
            <Route path='/register' element={<SignupForm />} />



            <Route path='*' element={<h1>Error 404 - ruta no encontrada</h1>} />


        </Routes>
    )
}