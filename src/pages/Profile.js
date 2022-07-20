import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

import ReturnGuests from "../utility/ReturnGuestOrGuests"

const Profile = (props) => {
    let location = useLocation();
    const { id } = location.state
    const [guest, setGuest] = useState()
    
    // empty dependency array so that it runs once
    useEffect(() => {
        ReturnGuests({ id: id })
            .then(arrayOfGuests => {
                setGuest(arrayOfGuests)
            })
    }, [])

    if (guest) {
        return (
            <div>
                <h3>profile</h3>
                <img alt={`${guest.name} from big brother`} src={guest.imgUrl}></img>
                <h2>{guest.name}</h2>
                <p>{guest.bio}</p>
            </div>
        )
    }
}

export default Profile