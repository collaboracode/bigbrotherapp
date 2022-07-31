import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';

import {
    AccordionItem,
    AccordionBody,
    AccordionHeader,
    UncontrolledAccordion,
    Card,
    CardTitle,
    Button,
} from 'reactstrap'

import guestService from '../services/GuestService'

const Profile = () => {
    let location = useLocation();
    const { id } = location.state
    const [guest, setGuest] = useState()

    // empty dependency array so that it runs once
    useEffect(() => {
        getGuest(id).then(
            data => setGuest(data)
        )
    }, [id])
    const getGuest = async (id) => {
        const data = await guestService.getGuest(id)
        if (data) {
            return data
        }
    }
    if (guest) {
        return (
            <>
                <Card
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        // width: '80%',
                        width: 'clamp(250px, 60%, 90%)',
                        padding: "2rem 1rem",
                        border: "none", // not sure if we want the border look here
                    }}
                >
                    <CardTitle tag="h5">
                        {guest.first_name}
                    </CardTitle>

                    <img alt={`${guest.first_name} from big brother`} src={guest.image_url}></img>
                    <UncontrolledAccordion stayOpen>
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                About/Bio
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <p>{guest.bio}</p>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                    <p style={{ width: "100%", textAlign: "center" }}>
                        does not do anything yet
                    </p>
                    <div className={"voteButtonDiv"}>
                        <Button color="success">
                            vote up
                        </Button>
                        <Button color="danger">
                            vote down
                        </Button>
                    </div>
                </Card>
            </>
        )
    }
}
export default Profile