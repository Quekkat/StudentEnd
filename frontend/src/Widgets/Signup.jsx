import { useState } from "react";
import { useStore } from "../GlobalVariables";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const { signUp } = useStore();
    const [formData, setFormData] = useState({
        URN: "",
        URNPassword: "",
        FName: "",
        LName:"",
        Section:"",
        Year:"",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUp(formData);
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-header">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-input-group">
                <input
                    id="URN"
                    name="URN"
                    type="text"
                    placeholder="Enter LMS URN"
                    className="signup-input rounded-input"
                    value={formData.URN}
                    onChange={handleChange}
                    autoComplete="username"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    person
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="FName"
                    name="FName"
                    type="text"
                    placeholder="Enter First Name"
                    className="signup-input rounded-input"
                    value={formData.FName}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    account_circle
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="LName"
                    name="LName"
                    type="text"
                    placeholder="Enter Last Name"
                    className="signup-input rounded-input"
                    value={formData.LName}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    account_circle
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="URNPassword"
                    name="URNPassword"
                    type="password"
                    placeholder="Enter password"
                    className="signup-input rounded-input"
                    value={formData.URNPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    lock
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="Year"
                    name="Year"
                    type="text"
                    placeholder="Enter Year Level"
                    className="signup-input rounded-input"
                    value={formData.Year}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    account_circle
                </span>
            </div>
            <div className="signup-input-group">
                <input
                    id="Section"
                    name="Section"
                    type="text"
                    placeholder="Enter Section"
                    className="signup-input rounded-input"
                    value={formData.Section}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <span className="material-symbols-rounded signup-input-icon">
                    account_circle
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