import { useState } from "react"
import { useParams } from "react-router-dom"
import guestService from "../services/GuestService"
import GuestForm from "../components/GuestForm"

// smrt
const GuestEditor = (props) => {
  const { id } = useParams()
  const [guestData, setGuestData] = useState(null)
  const getGuest = async (id) => {
    const data = await guestService.getGuest(id)
    if (data) setGuestData(data) 
  }
  if (id) {
    getGuest(id)
  }

  const handleChange = (e) => {
    console.log(e.target)
  }  
  
  return (
    <>
    {/* dumb */}
      <GuestForm guestData={guestData} handleChange={handleChange} />
    </>
  )
}
export default GuestEditor