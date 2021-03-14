import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import SignupPage from './pages/SignupPage';
import '../css/App.css';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Route path="/" exact component={StorePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/item/:id" component={ItemDetailsPage} />
      </main>
      <Footer />
    </>
  );
};

export default App;
