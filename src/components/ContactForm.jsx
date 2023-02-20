import React, { useState } from 'react'

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setResponse('Le formulaire a été envoyé avec succès');
        setEmail('');
        setMessage('');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Adresse test courriel:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}/>
                </label>
                <br />
                <button type="submit">Envoyer</button>
            </form>
            { response && <p>{response}</p> }
        </div>
    )
}

export default ContactForm;