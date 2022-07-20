import React, { useEffect, useState } from "react";
import {
    Container,
} from 'reactstrap'
import { useNavigate } from "react-router-dom";

// import guestService from '../services/GuestService';

import '../styles/Houseguests.css'

import ShowGuests from "../components/ShowGuests";
import ReturnGuests from "../utilities/ReturnGuestOrGuests"

const Houseguests = () => {
    const navigate = useNavigate()
    
    const [guests, setGuests] = useState();

    // useEffect(() => {
    //     getGuests();
    // }, []);

    const height = '100'
    const width = '100%'

    // const getGuests = async () => {
    //     const data = await guestService.getGuests();
    //     if (data?.length) setGuests(data);
    // }

    const handleImageClick = (id) => {
        navigate('/profile', { state: { id } })
    }

    // const renderGuests = () => {
    //     if (guests.length) {
    //         return guests.map((v, i) => {
    //             let rows;

    //             if ((v.id - 1) % 4 === 0) {
                    
    //             }
    //         });
    //     }
    // }

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