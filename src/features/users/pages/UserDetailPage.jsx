import React from "react";
import { Link, useParams, useSearchParams } from 'react-router'
import { useMessages } from "../../messages/hooks/useMessages";
import './UserDetailPage.css';
import { MessagesTable } from "../../messages/components/messagesTable/MessagesTable";

function UserDetailPage() {
    const { getMessagesByUser } = useMessages();
    const params = useParams();
    const id = params.id;
    const data = JSON.parse(localStorage.getItem('Data'))
   
    const user = data.filter(el => {
        if(el.id.value === id) {
            return el;
        }
    })



    return (
        <div className="containerCard">
            <p className="containerCard__title">Información del usuario</p>
            <article className="cardDetail">
                <div className="cardDetail__header">
                    <div className="cardDetail__img">
                        <img src={user[0].picture.large} alt="" />
                    </div>
                    <div>
                        <p className="card__name">{ user[0].name.first } { user[0].name.last }</p>
                        <p>{ user[0].email }</p>
                    </div>
                </div>
                <div className="card-content">
                     
                    <div className="card__info">
                        <div className="card_aline">
                            <p htmlFor="">Genero: </p>
                            <p className="info">{ user[0].gender }</p>
                        </div> 
                        <div className="card_aline">
                            <p htmlFor="">Edad: </p>
                            <p className="info">{ user[0].dob.age }</p>
                        </div> 
                        <div className="card_aline">
                            <label htmlFor="">Ciudad: </label>
                            <p className="info">{ user[0].location.city}</p>
                        </div>
                        <div  className="card_aline">
                            <label htmlFor="">Pais: </label>
                            <p className="info">{ user[0].location.country}</p>
                        </div>
                        <div className="card_aline">
                            <label htmlFor="">Nacionalidad: </label>
                            <p className="info">{ user[0].nat}</p>
                        </div>
                        <div className="card_aline">
                            <label htmlFor="">Fecha de nacimiento</label>
                            <p className="info"> {
                                new Date(
                                    user[0].dob.age
                                ).toLocaleDateString()
                            }</p>
                        </div>
                    </div>
                </div>
            </article>
            <div className="buttonReturn">
                <Link to={`/home`} style={{ textDecoration: 'none' }}>
                    <p className="moreInfo">Regresar</p> 
                 </Link>
            </div>
            {/* <MessageHistory messages={getMessagesByUser(id)} /> */}
             <MessagesTable
                messages={getMessagesByUser(id)}
                />
            
             
        </div>
    );
}

export { UserDetailPage };