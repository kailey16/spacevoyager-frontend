import React from "react"; 

class UserInfo extends React.Component {

  state = {
    apodInfo: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/apod',{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('jwt')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({apodInfo: data})
    })
  }

  render() {
    const { username, email } = this.props.currentUser
    const { date, explanation, url, title, media_type } = this.state.apodInfo

    return (
      <div className="UserInfo">
        <p className="userWelcome">Welcome {username}</p>
        <p className="apodTitle">{date}</p>
        <div className="apodCard">
          <p className="apodTitle">{title}</p>
          {media_type === "video" ? 
          (<div>
          <video className="apodPic" controls src={url} />
          </div>)
          : (<div>
          <img className="apodPic" src={url} alt="apod of the day" />
          </div>)
          }
          <p className="apodExp">{explanation}</p>
        </div>
      </div>
    )
  }
}

export default UserInfo