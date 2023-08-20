import React, { useEffect, useState } from "react";
import ApiClient from "./ApiClient";

const UserList = () =>{
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        ApiClient.get("/users")
        .then(res => setUserList(res.data))
        .catch(error => console.log(error))
    }, [])
    
    return<>
     {userList.map(user =>
        <div className="flex-container" key= {user.id} >
            <h3>{user.name}</h3>
            <div className="email">{user.email}</div>
            <div>{user.phone}</div>
        </div>
     )}
    </> 
}
export default UserList;