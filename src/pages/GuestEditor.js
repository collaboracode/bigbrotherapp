import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { Container } from "reactstrap"

import guestService from "../services/GuestService"
import GuestForm from "../components/GuestForm"

const GuestEditor = (props) => {
  const { id } = useParams()
  const [guestData, setGuestData] = useState(null)
  const navigate = useNavigate()

  const getGuest = async (id) => {
    const data = await guestService.getGuest(id)
    if (data) setGuestData(data)
  }

  useEffect(() => {
    if (id) {
      getGuest(id)
    }
  }, [id])

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setGuestData({ ...guestData, first_name: e.target.value })
        break
      case "lastName":
        setGuestData({ ...guestData, last_name: e.target.value })
        break
      case "bio":
        setGuestData({ ...guestData, bio: e.target.value })
        break
      case "isActive":
        setGuestData({ ...guestData, active: !guestData.active })
        break
      case "image_url":
        setGuestData({ ...guestData, image_url: e.target.value })
        break
      case "deleteGuest":
        if (window.confirm("are you sure?")) {
          guestService.deleteGuest(id)
            .then(() => {
              navigate(`/houseguests`)
            })
            .catch(err => {
              console.error(err)
            })
        }
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const returnVal = {
      first_name: guestData.first_name,
      last_name: guestData.last_name,
      bio: guestData.bio,
      image_url: guestData.image_url,
      active: guestData.active,
    }
    if (id) {

      guestService.updateGuest(id, returnVal)
        .then(() => {
          navigate(`/houseguests/${id}`)
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      guestService.postGuest(returnVal)
        .then(() => {
          navigate(`/houseguests`)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }

  return (
    <>
      <Container>
        {/* dumb */}
        <GuestForm
          guestData={guestData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          id={id}
        />
      </Container>
    </>
  )
}
export default GuestEditor