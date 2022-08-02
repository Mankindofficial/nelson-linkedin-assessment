import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/ShoppingCart/index.tsx";
import Checkout from "./pages/Checkout";
import ShoppingPage from "./pages/ShoppingPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Cart />} />
                <Route path="/shopping_page" element={<ShoppingPage />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
