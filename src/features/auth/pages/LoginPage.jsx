import React from "react";
import { FormLogin } from "../components/LoginForm/LoginForm";
import "./LoginPage.css";

function LoginPage(){
    return(
        <div className="loginPage">
            <FormLogin />
        </div>
    );
}

export {LoginPage};