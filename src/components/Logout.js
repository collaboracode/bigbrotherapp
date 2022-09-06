import userService from "../services/UserService"
import { useNavigate } from "react-router-dom"




const Logout = (props) => {
  const navigate = useNavigate()
  const { getLoggedInStatus } = props
  const handleClick = (e) => {
    userService.logout()
    .then(() => getLoggedInStatus())
    .then(navigate('/'))
  }
  return (
    <button className="btn btn-danger" onClick={handleClick}>Logout</button>
  )
}
export default Logout