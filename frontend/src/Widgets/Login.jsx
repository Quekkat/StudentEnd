import { useState } from "react";
import { useStore } from "../GlobalVariables";
import { Link } from "react-router-dom";

const Login =()=>{
    const { login } = useStore();
    const [formData, setFormData] = useState({
        GMAIL: "",
        PASSWORD: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(formData);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {/* lagay mo login dito */}
                <p> Insert login here</p>
                <Link className="signUp" to="/signin">Sign Up Instead</Link>

                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}
export default Login;