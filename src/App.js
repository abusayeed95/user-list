import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Users from './Components/Users/Users';
import Cart from './Components/Cart/Cart';

function App() {
  const [users, setUsers] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(data => {
        setUsers(data.results)
      })
      .catch(error => console.log(error))
  }, [])



  const addUser = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  }

  return (
    <div className="list-container">
      <div className="user-container">
        <div>
          <h1 className="heading">Users Loaded: {users.length}</h1>
          {
            users.map(user => <Users usersData={user} addUser={addUser}></Users>)
          }
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
