import React from 'react'
import "./Login.css"


function Login() {
    return (

        <>

            <html className='login-container'>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                        </div>
                        <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                        </div>
                    </form>
                </div>
            </html>

        </>

        
    )
}

export default Login