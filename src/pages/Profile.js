import React from "react"
import { useLocation } from 'react-router-dom';

const Profile = (props) => {

    let location = useLocation();
    const { imageUrl, name } = location.state

    let bio 

    switch (name.toLowerCase()) {
        case 'paloma':
            bio = "on the block"
            break;
        case 'michael':
            bio = "backstage pass"
            break;
        case 'denise':
            bio = "backstage boss"
            break;
        case 'joseph':
            bio = "on the block"
            break;
    
        default:
            break;
    }

    return (
        <div>
            Profile
            <img src={imageUrl}></img>
            <h2>{name}</h2>
            <p>{bio}</p>
        </div>
    )
}

export default Profile