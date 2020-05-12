import React, { useState, useEffect } from "react";
import axios from 'axios';

const FormCategories = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then(response => {
                setCategories(response.data);
            });
    }, []);

    const categoryList = categories.map(cat => {
        return (
            <p key={cat.id}
                className="card"
                onClick={() => showProductHandler(cat.id)}>
                {cat.name}
            </p>
        );
    });

    const showProductHandler = (id) => {
        setProducts([]);
        axios.get('http://localhost:3001/products/?catId=' + id)
            .then(response => {
                setProducts(response.data);
            });
    };

    const addItemHandler = (e, prodid) => {
        setSelected({
            name: e.target.name,
            quantity: e.target.value,
            prodId: e.target.id,
            catId: prodid,
        })
    }

    const addToOrderHandler = () => {
        setOrder((order) => [...order, selected]);
    }

    const productList = products.map(prod => {
        return (
            <div key={prod.id}>
                <h2>{prod.name}</h2>
                <label htmlFor="">Select quantity</label>
                <input type="number" name={prod.name} id={prod.id} onChange={(event) => addItemHandler(event, prod.catId)} min="0" max="5" />
                <button onClick={addToOrderHandler}>PreOrder</button>
            </div>
        );
    });

    const orderList = order.map((o, index) => {
        return (
            <p key={o.prodId} >
                {o.name}: {o.quantity}</p>
        );
    });

    return (
        <div>
            <div>
                <h1>Choose a category</h1>
                <p>{categoryList}</p>
                <p>{productList}</p>
            </div>
            <div>
                <h2>Your preorder</h2>
                <p>{orderList}</p>
            </div>
        </div>
    );
}

export default FormCategories;
