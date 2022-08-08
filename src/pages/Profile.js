import React, { useState, useEffect } from "react"
import { useParams, Link } from 'react-router-dom';

import "../styles/profile.css"

import { TiPencil } from 'react-icons/ti';
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
    const { id } = useParams()
    const [guest, setGuest] = useState()

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
                <Card className="border-0 mx-auto px-3 py-4">
                    <CardTitle tag="h5">
                        {guest.first_name}

                        {/* //todo add conditional logic so that only admins see this */}
                        <Link to={`/houseguest_editor/${id}`}>
                            <TiPencil />
                        </Link>
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
                    <div className={"d-flex gap-3 justify-content-center mt-3"}>
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