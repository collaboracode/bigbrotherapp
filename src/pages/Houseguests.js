import React, { useState } from "react";
import {
    Col,
    Row,
    Container,
} from 'reactstrap'
import { useNavigate } from "react-router-dom";
import '../styles/Houseguests.css'

import ReturnGuests from "../utility/ReturnGuestOrGuests"

const Houseguests = () => {
    const navigate = useNavigate()
    // const height = '100'
    const width = '100%'
    const handleImageClick = (imageUrl, name) => {
        navigate('/profile', { state: { imageUrl, name } })

    }

    const arr = ReturnGuests({start: 0, end: 1})
    const [guests, setGuests] = useState()
    !guests && setGuests(arr)
    const showGuests = () => {
        return (
            guests && guests.map((guest, i) => {
                return (
                    <Col sm="3" key={i}>
                        <img alt="" key={i} onClick={() => {
                            handleImageClick(guest.img, guest.name)
                        }}
                            width={width}
                            src={guest.img}></img>
                    </Col>
                )
            })
        )
    }

    return (
        <Container>
            <h1 className="text-primary">Houseguests</h1>
            <Row>
                {showGuests()}
            </Row>
            <Row>
                {showGuests()}
            </Row>
            <Row>
                {showGuests()}
            </Row>
            <Row>
                {showGuests()}
            </Row>
        </Container>
    )
}
export default Houseguests