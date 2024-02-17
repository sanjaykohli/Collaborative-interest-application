import React from 'react';
import './styles.css'; // Import your CSS file

function LoginPage() {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Implement your login logic here
    };

    return (
        <div className="outer-container">
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login Manually</button>

                    <p className="or-text">or continue with</p>

                    <div className="social-buttons">
                        <a href="https://accounts.google.com" className="google-btn">Google</a>
                        <br />
                        <a href="https://www.facebook.com" className="facebook-btn">Facebook</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
