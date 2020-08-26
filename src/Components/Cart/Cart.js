import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const totalAnnualSalary = cart.reduce((sum, salary) => sum + salary, 0);
    const usersSalary = cart.reduce((user, salary) => user + salary + ",", "")
    return (
        <div>
            <h1>User Added: {props.cart.length}</h1>
            <h3>Users: {usersSalary} </h3>
            <p>Total Annual salary : {totalAnnualSalary}</p>
        </div >
    );
};

export default Cart;