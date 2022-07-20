import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

import guestService from '../services/GuestService'

import ShowGuests from "../components/ShowGuests";

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
            // <ShowGuests
            //     // handleImageClick={handleImageClick}
            //     guests={props.guest}
            //     // max elements in row
            //     rowLength={4}
            //     // col fr of 12
            //     colWidth={3}
            // />

            <div key={"key"}>
                <h3>profile</h3>
                <img alt={`${guest.first_name} from big brother`} src={guest.image_url}></img>
                <h2>{guest.first_name}</h2>
                <p>{guest.bio}</p>
            </div>
        )
    }
}

export default Profile