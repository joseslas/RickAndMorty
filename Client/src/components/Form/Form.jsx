import { useState } from "react";
import Validation from "./validation";
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import "./Login.css"
import "animate.css"

const Form = ({login}) => {
    
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const placeHolder = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        SetErrors(Validation(userData));
    }

    const [errors, SetErrors] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="login animate__animated animate__fadeInDown">
            <h1 className="form-title">Login</h1>
            <label htmlFor="email">Email:</label>
            <span className="icon1"><AiOutlineMail/></span>
            <input name="email" type="email" value={userData.email} placeholder="name@mail.com" onChange={placeHolder}/>
            {errors?.email ? <p className="email">{errors.email}</p> : errors.email = ""}
            <label htmlFor="password">Password:</label>
            <span className="icon2"><AiOutlineLock/></span>
            <input name="password" type="password" value={userData.password} placeholder="Password" onChange={placeHolder}/>
            {errors?.password ? <p className="password">{errors.password}</p> : errors.password = ""}
            <br />
            <button type="submit">Ingresar</button>
    </form>
        </div>
    )
}

export default Form;