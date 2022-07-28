import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

import guestService from '../services/GuestService'

const Profile = (props) => {
    let location = useLocation();
    const { id } = location.state
    const [guest, setGuest] = useState()

    // empty dependency array so that it runs once
    useEffect(() => {
        const data = getGuest(id).then(
            data => setGuest(data)
        )
    }, [])
    const getGuest = async (id) => {
        const data = await guestService.getGuest(id)
        if (data) {
            return data
        }
    }
    if (guest) {

        return (
            <div>
                <h3>profile</h3>
                <img alt={`${guest.first_name} from big brother`} src={guest.image_url}></img>
                <h2>{guest.first_name}</h2>
                <p>{guest.bio}</p>
            </div>
        )
    }
}

export default Profile