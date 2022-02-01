import React from 'react';
import CartItem from './CartItem';
import CartForm from './CartForm';


class CartItems extends React.Component {

  state = {
    items: [
      { product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ],
    id: 43
  }

  addItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        {
          product: {
            id: ++this.state.id,
            name: item.name,
            priceInCents: item.priceInCents
          },
          quantity: item.quantity
        }
      ]
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {
            this.state.items.map((cartItem) => <CartItem key={cartItem.product.id} product={cartItem.product} quantity={cartItem.quantity} />)
          }
        </div>
        <CartForm onProductAdd={this.addItem} />
      </div>
    )
  }
}
export default CartItems