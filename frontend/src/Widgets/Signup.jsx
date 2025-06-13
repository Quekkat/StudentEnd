import "../Widgets/SignUp.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <form className="signup-form">
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
                />
                <span className="material-symbols-rounded signup-input-icon">
                    lock
                </span>
            </div>
            <button type="submit" className="signup-btn">
                Sign Up
            </button>
            <div className="signup-bottom-text">
                Do You Have A Account?{" "}
                <Link to="/login" className="signup-link">
                    Login
                </Link>
            </div>
        </form>
    );
};

export default Signup;