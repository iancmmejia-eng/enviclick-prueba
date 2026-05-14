import { useState } from "react";
import './SendMessageModal.css';

function SendMessageModal({user, onClose, onSend}) {
    const [message, setMessage] = useState('');
    
    return (
        <div className="overlay">
            <div className="modal">
                <h2>Mensaje para {user.name.first}</h2>
                <div className="modal__text">
                    <textarea 
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}    
                    ></textarea>
                </div>
                <div className="modal__buttons">
                    <button onClick={onClose}>
                        Cancelar
                    </button>
                    <button className="modal__buttons-send" onClick={() => {
                        onSend(user.id.value, message)
                    }}>Enviar</button>

                    
                </div>

            </div>
        </div>

    );
}

export { SendMessageModal };