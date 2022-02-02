import React from 'react';

const CartItem = ({ product, quantity }) => (
  <div className="list-group-item">
    <div className="row">
      <div className="col-md-8">{product.name}&#8623;</div>
      <div className="col-md-2">${product.priceInCents / 100}</div>
      <div className="col-md-2">{quantity}</div>
    </div>
  </div>
)
export default CartItem