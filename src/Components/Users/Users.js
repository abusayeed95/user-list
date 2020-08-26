import React from 'react';
import './Users.css'
const Users = (props) => {
    const img = props.usersData.picture.large;
    const name = props.usersData.name.first + ' ' + props.usersData.name.last;
    const email = props.usersData.email;
    const phone = props.usersData.phone;
    const salary = (props.usersData.dob.age + 30) * 1000;

    return (
        <div className="single-user">
            <div className="img-container">
                <img src={img} alt="img" />
            </div>
            <div className="user-details">
                <h2>{name}</h2>
                <p> Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Salary: ${salary} (per year)</p>
            </div>
            <div className="add-button">
                <button onClick={() => props.addUser(salary)}>Add User</button>
            </div>
        </div>
    );
};

export default Users;