import React, { useState, useEffect } from "react";

import {
    Container,
} from 'reactstrap'
import { useNavigate } from "react-router-dom";
import '../styles/Houseguests.css'

import ShowGuests from "../components/ShowGuests";
import ReturnGuests from "../utility/ReturnGuestOrGuests"

const Houseguests = () => {
    const navigate = useNavigate()

    /*     
        later on maybe we could just pass the whole object for the guest
        possibly with a call to ReturnGuests({id: theirId})
        in case we have that endpoint on the api give more info than
        it does with the index route
     */
    const handleImageClick = (id) => {
        navigate('/profile', { state: { id } })
    }

    const [guests, setGuests] = useState()
    // empty dependency array so that it runs once
    useEffect(() => {
        if (guests === undefined) {
            ReturnGuests()
                .then(arrayOfGuests => {
                    setGuests(arrayOfGuests)
                })
        }
    }, [])

    return (
        <Container className="guestsContainer">
            <h1 className="text-primary">Houseguests</h1>
            {/* not sure if this is wanted, but it could be good to have */}
            {!guests && <p>loading...</p>}
            <ShowGuests handleImageClick={handleImageClick} guests={guests} />
            <ShowGuests handleImageClick={handleImageClick} guests={guests} />
            <ShowGuests handleImageClick={handleImageClick} guests={guests} />
            <ShowGuests
                handleImageClick={handleImageClick}
                guests={guests}
                start={1}
                end={2}
            />
        </Container>
    )
}
export default Houseguests