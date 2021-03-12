import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import StorePage from './pages/StorePage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import '../css/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Route path="/" exact component={StorePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/signup" component={SignupPage} />
    </>
  );
};

export default App;
