import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import '../css/App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Route path="/" exact component={StorePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/placeorder" component={PlaceOrderPage} />
        <Route path="/item/:id" component={ItemDetailsPage} />
      </main>
      <Footer />
    </>
  );
};

export default App;
