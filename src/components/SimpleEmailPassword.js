import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    
const auth = getAuth();

const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
        .them(result => {
            const user = result.result;
            console.log(user);
    })
}




const SimpleEmailPassword = () => {
    return (
        <div>
            <from onSubmit={handleRegister}>
                <input type="email" name="email" id="email" placeholder='Your Email' required />
                <input type="password" name="password" id="password" placeholder='password' required />
                <button type='submit'>Register</button>
            </from>
        </div>
    );
};

export default SimpleEmailPassword;