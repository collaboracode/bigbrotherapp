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
    const MapUsers = () => {
        if (users?.length && Array.isArray(users)) {
            return users && users.map((user, i) => {
                let id // continuing to allow for swapping to rails api
                if (user?.id) {
                    id = user.id
                } else if (user?._id) {
                    id = user._id
                }
                return (
                    <div key={id}>
                        <h4>Username: {user.username}</h4>
                        <p>Active: {user.active ? "true" : "false"}</p>
                        <p>ID: {`${id}`}</p>
                    </div>
                )
            })
        } else {
            return null
        }
    }
    return (
        <>
            <h1>Users</h1>
            <MapUsers />
            {/* {users && users.map((user, i) => {
                return (
                    <div key={user._id}>
                        <h4>Username: {user.username}</h4>
                        <p>Active: {user.active ? "true" : "false"}</p>
                        <p>ID: {`${user._id}`}</p>
                    </div>
                )
            })} */}
        </>
    )
}


export default Users
