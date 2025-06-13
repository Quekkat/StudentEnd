import { useState } from "react";
import { useStore } from "../GlobalVariables";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const { login } = useStore();
    const [formData, setFormData] = useState({
        usn: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-header">
                <h1>Student Log In</h1>
            </div>
            <div className="login-input-group">
                <input
                    id="usn"
                    name="usn"
                    type="text"
                    placeholder="Enter USN"
                    className="login-input rounded-input"
                    value={formData.usn}
                    onChange={handleChange}
                />
                <span className="material-symbols-rounded login-input-icon">
                    account_circle
                </span>
            </div>
            <div className="login-input-group">
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="login-input rounded-input"
                    value={formData.password}
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
                <Link to="/signin" className="login-link">
                    Sign Up Instead
                </Link>
            </div>
        </form>
    );
};

export default Login;