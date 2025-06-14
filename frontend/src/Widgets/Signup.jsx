import { useState } from "react";
import { useStore } from "../GlobalVariables";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const { signUp } = useStore();
    const [formData, setFormData] = useState({
        username: "",
        usn: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        signUp(formData);
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-header">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-input-group">
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    className="signup-input rounded-input"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    person
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="usn"
                    name="usn"
                    type="text"
                    placeholder="Enter USN"
                    className="signup-input rounded-input"
                    value={formData.usn}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    account_circle
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="signup-input rounded-input"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    lock
                </span>
            </div>
            <button type="submit" className="signup-btn">
                Sign Up
            </button>
            <div className="signup-bottom-text">
                Do You Have An Account?
                <br />
                <Link to="/login" className="signup-link">
                    Login
                </Link>
            </div>
        </form>
    );
};

export default Signup;