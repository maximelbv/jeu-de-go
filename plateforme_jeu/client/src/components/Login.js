import React from "react";
import { useEffect, useState } from 'react';

export default function Login(){
    const [register, setRegister] = useState(false);

    const handleClick = () => {
        setRegister(!register);
    };
    return(
        <div id="login">
            <input
                placeholder="Enter your email here"
            />

            <input
            placeholder="Enter your password here"
            />

            {
            register ? <input placeholder="Confirm password"/> : ""
            }

            <input type="button" value={register ? 'register' : 'login'} />

            <p onClick={()=>{handleClick()}}>{register ? 'login' : 'register'}</p>  
        </div>
    )
}