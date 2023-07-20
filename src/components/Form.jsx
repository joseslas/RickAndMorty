import { useState } from "react";
import Validation from "./validation";

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email:</label>
            <input name="email" type="email" value={userData.email} placeholder="email" onChange={placeHolder}/>
            {errors?.email ? <p>{errors.email}</p> : errors.email = ""}
            <br/>
            <label htmlFor="password">password:</label>
            <input name="password" type="text" value={userData.password} placeholder="password" onChange={placeHolder}/>
            {errors?.password ? <p>{errors.password}</p> : errors.password = ""}
            <br/> 
            <button>Submit</button>
    </form>
    )
}

export default Form;