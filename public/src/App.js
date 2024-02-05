import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import NotFoundElement from "./components/notFoundElement/NotFoundElement";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainPage from "./components/mainPage/MainPage";
import {Container} from "@mui/material";
import ProductComponent from "./components/productsPage/ProductComponent";
import AnimalComponent from "./components/animalPage/AnimalComponent";
import ProductDetails from "./components/productDetails/ProductDetails";
import CartProvider from "./context/CartContext";
import Summary from "./components/summary/Summary";
import OrderApproved from "./components/summary/orderApproved/OrderApproved";
import Orders from "./components/orders/Orders";
import About from "./components/about/About";
import React from "react";
import Contact from "./components/contact/Contact";
import OrderDetails from "./components/orderDetails/OrderDetails";

function App() {
  return (
      <CartProvider>
          <BrowserRouter>
            <Header/>
            <Container sx={{
                marginBottom: "auto",
            }}>
                <Container
                    maxWidth="xl"
                    disableGutters
                    >
                    <Routes>

                        <Route path="/" element={<MainPage/>} />
                        <Route path="/products/:category_id" element={<ProductComponent/>} />
                        <Route path="/animals/:animalCategory_id" element={<AnimalComponent/>} />
                        <Route path={"/product/:product_id"} element={<ProductDetails/>} />
                        <Route path="/summary" element={<Summary/>} />
                        <Route path="/order-approved/:order_id" element={<OrderApproved/>} />
                        <Route path={"/orders"} element={<Orders/>} />
                        <Route path={"/orders/:order_id"} element={<OrderDetails/>} />
                        <Route path={"/about"} element={<About/>} />
                        <Route path={"/contact"} element={<Contact/>} />
                        <Route path="/404" element={<NotFoundElement />} />
                        <Route path="*" element={<Navigate to="/404" />} />

                    </Routes>
                </Container>
            </Container>

            <Footer/>
          </BrowserRouter>
      </CartProvider>
  );
}

export default App;
