import React from 'react';

class CartForm extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onProductAdd(this.state)
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    state = {};
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h4>Add product</h4>
                    <input className></input>ame="form-control" placeholder="Productname" onChange={this.onChange} name="name" />
                    <input className="form-control" placeholder="Price" onChange={this.onChange} name="priceInCents" />
                    <input className="form-control" placeholder="Quantity" onChange={this.onChange} name="quantity" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
}

export default CartForm