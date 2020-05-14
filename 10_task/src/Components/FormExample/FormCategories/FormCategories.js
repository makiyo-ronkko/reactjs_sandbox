import React, { useState, useEffect } from "react";
import axios from 'axios';
import './FormCategories.css';

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
            <div className="categoryCard">
                <p key={cat.id}
                    className="card"
                    onClick={() => showProductHandler(cat.id)}>
                    {cat.name}
                </p>
            </div>
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
            <div key={prod.id} className="product">
                <h2>{prod.name}</h2>
                <label htmlFor="">Select quantity</label>
                <input type="number" name={prod.name} id={prod.id} onChange={(event) => addItemHandler(event, prod.catId)} min="0" max="5" />
                <button onClick={addToOrderHandler}>PreOrder</button>
            </div>
        );
    });

    const removePreOrderHandler = (id) => {
        const oldList = [...order];
        oldList.splice(id, 1); // removing 1 element at id
        setOrder(oldList);
    }

    const orderList = order.map((o, index) => {
        return (
            <div className="selectedItem">
                <p key={o.prodId} className="preOrder" onClick={() => removePreOrderHandler(index)}>
                    x {o.name}: {o.quantity}
                </p>
            </div>
        );
    });

    return (
        <div>
            <div>
                <h2 style={{ margin: "20px" }}>Choose a category</h2>
                <p>{categoryList}</p>
                <p>{productList}</p>
            </div>
            <div>
                <h2 style={{ margin: "20px" }}>Your preorder</h2>
                <p>{orderList}</p>
            </div>
        </div>
    );
}

export default FormCategories;
