import { useState } from "react";
import { useStore } from "../GlobalVariables";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const { login } = useStore();
    const [formData, setFormData] = useState({
        USN: "",
        USNPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-header">
                    <h1>Student Log In</h1>
                </div>
                <div className="login-input-group">
                    <input
                        name="USN"
                        type="text"
                        placeholder="Enter USN"
                        className="login-input rounded-input"
                        value={formData.USN}
                        onChange={handleChange}
                    />
                    <span className="material-symbols-rounded login-input-icon">
                        account_circle
                    </span>
                </div>
                <div className="login-input-group">
                    <input
                        name="USNPassword"
                        type="password"
                        placeholder="Enter password"
                        className="login-input rounded-input"
                        value={formData.USNPassword}
                        onChange={handleChange}
                    />
                    <span className="material-symbols-rounded login-input-icon">
                        lock
                    </span>
                </div>
                <button type="submit" className="login-btn">
                    Log In
                </button>
                <div className="login-bottom-text">
                    Don't have an account?
                    <br />
                    <Link to="/signup" className="login-link">
                        Sign Up Instead
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;