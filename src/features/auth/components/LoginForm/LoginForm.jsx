import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router'
import './LoginForm.css'

function FormLogin() {
    const { register, handleSubmit,setValue, reset, formState: {errors, isDirty, isValid} } = useForm({ mode: "onChange"});
    const [formData, setFormData] = useState('');
    const navigate = useNavigate();

    const loginSubmit = (data) => {

        setFormData('Form Submitted');
         reset();
    }

    useEffect( () => {
        if(formData) {
            navigate('/home');
        }
    }, [formData, navigate])

    return(
        <div className="login">
            <form autoComplete="off" onSubmit={handleSubmit(loginSubmit)}>
                <div className="login__contentTitle">
                    <h1 className="login__title">Bienvenido al Portal</h1>
                </div>
                <div className="login__form">
                    <label className="login__correo" htmlFor="">Correo</label>
                    <input
                        className={errors?.email ? 'invalid': ''}
                        id="email"
                        name="email"
                        type="text"
                        placeholder="correo@gmail.com"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "El campo de correo es obligatorio"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "El formato del correo es incorrecto, por favor reviselo"
                            }
                        })}      
                    />
                    {errors?.email && (
                        <small className="line-error">{ errors.email.message } </small>
                    )}
                    <label className="login__correo" htmlFor="">Contraseña</label>
                    <input 
                        name="password"
                        id="password"
                        type="password"
                        placeholder="minimo 8 caracteres" 
                        {...register("password", {
                            required: {
                                value: true,
                                message: "El campo contraseña es obligatorio"
                            },
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener almenos 8 caracteres"
                            }
                        })}
                    />
                      {errors?.password && (
                        <small className="line-error">{ errors.password.message } </small>
                    )}
                </div>
                <div className="login__buttonContainer">
                    <button disabled={!isValid || !isDirty} className="login__buttonContainer--button">Iniciar sesión</button>
                </div>
                <div className="container__off">
                    <small className="off__pass">Olvide mi contraseña</small>
                </div>
            </form>
        </div>
    );
}   

export { FormLogin };