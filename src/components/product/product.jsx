import React, { Component } from 'react';

class Product extends Component {
    state = {};

    render() {
        return (
            <div>
                <span>Name</span>
                <span className="badge badge-primary">5</span>
            </div>
        )
    }
}

export default Product;