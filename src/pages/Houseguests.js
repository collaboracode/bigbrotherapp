import React, { useEffect, useState } from "react"
import { Container } from 'reactstrap'
import { useNavigate } from "react-router-dom"

import guestService from '../services/GuestService'

import '../styles/Houseguests.css'
import MakeRowsOfGuests from "../components/MakeRowsOfGuests"

const Houseguests = () => {
    const navigate = useNavigate()
    const [guests, setGuests] = useState()

    useEffect(() => {
        getGuests()
    }, [])
    const getGuests = async () => {
        const data = await guestService.getGuests()
        if (data?.length) setGuests(data)
    }

    const handleImageClick = (id) => {
        navigate('/profile', { state: { id } })
    }
    return (
        <Container className="guestsContainer">
            <h1 className="text-primary">Houseguests</h1>
            {/* not sure if this is wanted, but it could be good to have */}
            {/* {!guests && <p>loading...</p>} */}
            <MakeRowsOfGuests
                handleImageClick={handleImageClick}
                guests={guests}
                // max elements in row
                rowLength={4}
                // col fr of 12
                colWidth={3}
            />
        </Container>
    )
}
export default Houseguests