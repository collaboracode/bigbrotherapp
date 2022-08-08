import React, { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import { Container } from 'reactstrap'
import { GrAddCircle } from 'react-icons/gr'

import guestService from '../services/GuestService'
import MakeRowsOfGuests from "../components/MakeRowsOfGuests"

import '../styles/Houseguests.css'

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
        navigate(`/houseguests/${id}`)
    }
    return (
        <Container className="guestsContainer">
            <div className="d-flex">
                <h1 className="text-primary">Houseguests</h1>

                {/* //todo add conditional so that it only shows for admins */}
                <Link className="mt-2" to={`/houseguest_editor`}>
                    <GrAddCircle />
                </Link>
            </div>
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