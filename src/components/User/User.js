import React, { useState } from 'react';
import './User.css';

const User = props => {
    const {name, email, website ,picture, phone} = props.user;
    const [mobile, setMobile] = useState('');
    const addMember = props.addMember;
    const fullName = name.first + ' ' + name.last;
    const userStyle = {
        border: '2px solid red',
        margin: '10px',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        width: '40%',
    }
    const showPhone = () => {
        setMobile(phone);
    }
    return (
        <div style={userStyle}>
            <div style={{marginTop: '25px'}}>
                <img src={picture.large} alt="" />
            </div>
            <div style={{marginLeft: '20px'}}>
                <h1>Name: {fullName}</h1>
                <p>Email: {email}</p>
                <p><a href={website} target='_blank' >Learn about me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showPhone}>Show Phone Number</button>
                <button onClick={() => addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
}

export default User;