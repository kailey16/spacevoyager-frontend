import React from "react";
import MediaContainer from '../SearchPage/MediaContainer'
// import { connect } from 'react-redux';


class LibraryPage extends React.Component {

  render() {
    return (
      <div>
        LibraryPage
        {/* <MediaContainer media={this.props.media}/> */}
      </div>
    )
  }

}

// const mapStateToProps = (state) => {
//   return {
//     media: state
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchingLibMedia: () => dispatch(fetchingLibMedia())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage)

export default LibraryPage