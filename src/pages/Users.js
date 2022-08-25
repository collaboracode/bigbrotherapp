import React, { useEffect, useState } from "react";
import guestService from "../services/GuestService";
import userService from "../services/UserService";

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers()
    }, [])
    const getUsers = async () => {
        await userService.getUsers()
            .then(data => {
                setUsers(data)
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <h1>Users</h1>
            {users && users.map((user, i) => {
                return (
                    <div key={user._id}>
                        <h4>Username: {user.username}</h4>
                        <p>Active: {user.active ? "true" : "false"}</p>
                        <p>ID: {`${user._id}`}</p>
                    </div>
                )
            })}
        </>
    )
}


export default Users
