import React from "react";

const UserInfo = (props) => {
  const { username, email } = props.currentUser
  return (
    <div className="UserInfo">
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}

export default UserInfo