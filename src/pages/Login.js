import { useState } from "react"
import userService from "../services/UserService"
import { useNavigate } from "react-router-dom"
const Login = (props) => {
  const {getLoggedInStatus} = props

  // ? would we want this to be controlled input ?

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    userService.login({
      username: `${e.target.username.value}`,
      password: `${e.target.password.value}`
    })
      .then(
        () => getLoggedInStatus()
      )
      .then(navigate('/'))
  }
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type={"text"} name="username"></input>
        </label>
        <label>
          Password:
          <input type={"password"} name="password"></input>
        </label>
        <button type={"submit"} className={"btn btn-success"}>Submit</button>
      </form>
    </div>
  )
}
export default Login