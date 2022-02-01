import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';

import React from 'react';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <CartHeader />
        <CartItems />
        <CartFooter copyright="2017" />
      </div>
    );
  }
}

export default App;