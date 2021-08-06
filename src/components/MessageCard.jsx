import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const MessageCard = () => {
    const [cardMessage, setCardMessage] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMessageCard = () => {

            axios.get(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                setCardMessage(data);
            })
        }
        getMessageCard()
    }, [id])

    return (
        <div className="matchListContainer">
             <h2>{cardMessage.name}</h2>
             <div>
                 
             </div>
        </div>
    );
}

export default MessageCard;