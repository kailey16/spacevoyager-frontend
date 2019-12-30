import React from "react";
import UserInfo from './UserInfo'
import LibraryContainer from './LibraryContainer'
import '../style/Profile.css'
import { connect } from 'react-redux';
import NewLibraryForm from './NewLibraryForm'
 

class Profile extends React.Component {

  render() {
    return (
      <div className="profileContainer">
        <UserInfo currentUser={this.props.currentUser} />
        <LibraryContainer />
        <NewLibraryForm />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}


export default connect(mapStateToProps)(Profile)