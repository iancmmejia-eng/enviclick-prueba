import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { CiMail } from "react-icons/ci";
import { VscLocation } from "react-icons/vsc";
import { FiPhoneCall } from "react-icons/fi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

import './UserCard.css'

function UserCard ({ 
    user,
    isSelected,
    onSelect,
    onSendMessage,
    onDelete
 }) {
   
    return (
        <section className="card-container">
            <article className="card">
                <button
                    className="deleteButton"
                    onClick={() => onDelete(user.id)}
                >
                    Eliminar
                </button>
                <div className="cardHeader">
                    <div className="cardHeader__img">
                        <img className="card__image" src={user.picture.large} alt="" />
                    </div>
                     <div className="card__info">
                        <p className="card__name">{ user.name.first} {user.name.last}</p>
                        <div>
                            <p >{user.dob.age} años</p>
                        </div>
                    </div>
                    <div className="checkbox">
                        <input
                            
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => onSelect(user.id.value)}
                        />
                    </div>
                </div>
                <div className="card__content">
                    <div className="card__data">
                        <CiMail />
                        <p >{user.email}</p>
                    </div>
                     
                     <div className="card__data">
                        <VscLocation />
                        <p >{user.location.country}</p>
                    </div>
                    <div className="card__data">
                        <FiPhoneCall />
                        <p >{user.phone}</p>
                    </div>
                    <div className="card__footer">
                         <div>
                            <Link to={`/users/${user.id.value}`} style={{ textDecoration: 'none' }}>
                            <p className="moreInfo">Ver detalle</p> 
                            </Link>
                        </div>
                        <div className="containerButton">
                            <button className="buttonMessage" onClick={onSendMessage}>Enviar mensaje</button>
                        </div>
                    </div>
                </div>
                
            </article>
        </section>
    );
}

export { UserCard };